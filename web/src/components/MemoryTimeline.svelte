<script lang="ts">
  /**
   * Memory Timeline Component
   *
   * Displays a chronological timeline of memory events for a specific track.
   * Shows AI interactions, plugin actions, user inputs, and errors.
   */

  import { onMount } from 'svelte';

  export let trackId: string | undefined = undefined;
  export let sessionId: string | undefined = undefined;
  export let limit: number = 50;
  export let compact: boolean = false;

  interface MemoryEvent {
    id: string;
    timestamp: string;
    type: string;
    category: string;
    source: string;
    trackId?: string;
    sessionId?: string;
    data: any;
    metadata?: any;
  }

  let events: MemoryEvent[] = [];
  let loading = true;
  let error: string | null = null;
  let selectedEvent: MemoryEvent | null = null;

  // Fetch events from backend
  async function loadEvents() {
    try {
      loading = true;
      error = null;

      const params = new URLSearchParams();
      if (trackId) params.set('trackId', trackId);
      if (sessionId) params.set('sessionId', sessionId);
      if (limit) params.set('limit', limit.toString());

      const response = await fetch(`/api/memory/events?${params}`);

      if (!response.ok) {
        throw new Error('Failed to load memory events');
      }

      events = await response.json();
    } catch (err: any) {
      error = err.message;
      console.error('Error loading memory events:', err);
    } finally {
      loading = false;
    }
  }

  // Format timestamp
  function formatTime(timestamp: string): string {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();

    if (diff < 60000) return 'Just now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  }

  // Get category icon and color
  function getCategoryStyle(category: string): { icon: string; color: string; bg: string } {
    const styles: Record<string, { icon: string; color: string; bg: string }> = {
      plugin: { icon: '🔌', color: '#3b82f6', bg: '#1e40af20' },
      gpt_command: { icon: '🤖', color: '#8b5cf6', bg: '#6d28d920' },
      user_input: { icon: '👤', color: '#10b981', bg: '#05965920' },
      error: { icon: '⚠️', color: '#ef4444', bg: '#dc262620' },
      system: { icon: '⚙️', color: '#6b7280', bg: '#4b556320' },
      track: { icon: '🎵', color: '#f59e0b', bg: '#d9770620' },
      session: { icon: '📊', color: '#06b6d4', bg: '#0891b220' },
    };
    return styles[category] || { icon: '📝', color: '#6b7280', bg: '#4b556320' };
  }

  // Get event type display name
  function getEventTypeName(type: string): string {
    return type
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  onMount(() => {
    loadEvents();
  });

  // Reload when trackId or sessionId changes
  $: if (trackId || sessionId) {
    loadEvents();
  }
</script>

<div class="memory-timeline" class:compact>
  <div class="timeline-header">
    <h3>Memory Timeline</h3>
    <button class="refresh-btn" on:click={loadEvents} disabled={loading}>
      {loading ? '⟳' : '↻'} Refresh
    </button>
  </div>

  {#if loading && events.length === 0}
    <div class="loading">
      <div class="spinner"></div>
      <p>Loading memory events...</p>
    </div>
  {:else if error}
    <div class="error">
      <span class="error-icon">⚠️</span>
      <p>{error}</p>
      <button class="retry-btn" on:click={loadEvents}>Try Again</button>
    </div>
  {:else if events.length === 0}
    <div class="empty">
      <span class="empty-icon">📭</span>
      <p>No memory events yet</p>
    </div>
  {:else}
    <div class="timeline-list">
      {#each events as event (event.id)}
        {@const style = getCategoryStyle(event.category)}
        <div
          class="timeline-item"
          class:selected={selectedEvent?.id === event.id}
          on:click={() => selectedEvent = selectedEvent?.id === event.id ? null : event}
          on:keypress={(e) => e.key === 'Enter' && (selectedEvent = selectedEvent?.id === event.id ? null : event)}
          role="button"
          tabindex="0"
        >
          <div class="event-marker" style="background-color: {style.color}">
            <span class="event-icon">{style.icon}</span>
          </div>

          <div class="event-content">
            <div class="event-header">
              <span class="event-type" style="background-color: {style.bg}; color: {style.color}">
                {getEventTypeName(event.type)}
              </span>
              <span class="event-time">{formatTime(event.timestamp)}</span>
            </div>

            <div class="event-summary">
              {#if event.category === 'gpt_command'}
                {#if event.data.message}
                  <p class="event-message">"{event.data.message.substring(0, 80)}{event.data.message.length > 80 ? '...' : ''}"</p>
                {:else}
                  <p>AI interaction</p>
                {/if}
              {:else if event.category === 'error'}
                {#if event.metadata?.error?.message}
                  <p class="event-error">{event.metadata.error.message}</p>
                  <span class="severity severity-{event.metadata.error.severity}">
                    {event.metadata.error.severity}
                  </span>
                {/if}
              {:else if event.category === 'plugin'}
                <p>Plugin: {event.type.replace('plugin_', '')}</p>
              {:else if event.category === 'user_input'}
                {#if event.data.input}
                  <p class="event-message">"{event.data.input.substring(0, 80)}{event.data.input.length > 80 ? '...' : ''}"</p>
                {/if}
              {:else}
                <p>{JSON.stringify(event.data).substring(0, 100)}</p>
              {/if}
            </div>

            {#if selectedEvent?.id === event.id && !compact}
              <div class="event-details">
                <div class="detail-row">
                  <strong>Source:</strong> {event.source}
                </div>
                {#if event.trackId}
                  <div class="detail-row">
                    <strong>Track:</strong> {event.trackId}
                  </div>
                {/if}
                {#if event.sessionId}
                  <div class="detail-row">
                    <strong>Session:</strong> {event.sessionId}
                  </div>
                {/if}

                {#if event.metadata?.gptSource}
                  <div class="detail-section">
                    <strong>AI Metadata:</strong>
                    <ul>
                      <li>Provider: {event.metadata.gptSource.provider}</li>
                      <li>Model: {event.metadata.gptSource.model}</li>
                      {#if event.metadata.gptSource.tokensUsed}
                        <li>Tokens: {event.metadata.gptSource.tokensUsed}</li>
                      {/if}
                      {#if event.metadata.gptSource.latencyMs}
                        <li>Latency: {event.metadata.gptSource.latencyMs}ms</li>
                      {/if}
                    </ul>
                  </div>
                {/if}

                <div class="detail-section">
                  <strong>Full Data:</strong>
                  <pre class="json-preview">{JSON.stringify(event.data, null, 2)}</pre>
                </div>
              </div>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .memory-timeline {
    background: #1a1a1a;
    border-radius: 8px;
    padding: 16px;
    color: #fff;
    max-height: 600px;
    display: flex;
    flex-direction: column;
  }

  .memory-timeline.compact {
    max-height: 400px;
    padding: 12px;
  }

  .timeline-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid #333;
  }

  .timeline-header h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
  }

  .refresh-btn {
    background: #2a2a2a;
    border: 1px solid #444;
    color: #fff;
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s;
  }

  .refresh-btn:hover:not(:disabled) {
    background: #3a3a3a;
    border-color: #555;
  }

  .refresh-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .timeline-list {
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .timeline-item {
    display: flex;
    gap: 12px;
    padding: 12px;
    background: #2a2a2a;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
    border: 1px solid transparent;
  }

  .timeline-item:hover {
    background: #333;
    border-color: #444;
  }

  .timeline-item.selected {
    background: #333;
    border-color: #3b82f6;
  }

  .event-marker {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .event-icon {
    font-size: 16px;
  }

  .event-content {
    flex: 1;
    min-width: 0;
  }

  .event-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    gap: 8px;
  }

  .event-type {
    font-size: 12px;
    font-weight: 600;
    padding: 4px 8px;
    border-radius: 4px;
    white-space: nowrap;
  }

  .event-time {
    font-size: 12px;
    color: #888;
    white-space: nowrap;
  }

  .event-summary {
    font-size: 14px;
    color: #ccc;
  }

  .event-summary p {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .event-message {
    font-style: italic;
    color: #a0a0a0;
  }

  .event-error {
    color: #ef4444;
  }

  .severity {
    display: inline-block;
    font-size: 10px;
    font-weight: 700;
    padding: 2px 6px;
    border-radius: 3px;
    margin-left: 8px;
    text-transform: uppercase;
  }

  .severity-low { background: #059669; color: white; }
  .severity-medium { background: #f59e0b; color: white; }
  .severity-high { background: #ef4444; color: white; }
  .severity-critical { background: #7f1d1d; color: white; }

  .event-details {
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid #444;
    font-size: 13px;
  }

  .detail-row {
    margin-bottom: 6px;
  }

  .detail-row strong {
    color: #888;
    margin-right: 8px;
  }

  .detail-section {
    margin-top: 12px;
  }

  .detail-section strong {
    display: block;
    color: #888;
    margin-bottom: 6px;
  }

  .detail-section ul {
    margin: 0;
    padding-left: 20px;
    color: #ccc;
  }

  .detail-section li {
    margin-bottom: 4px;
  }

  .json-preview {
    background: #1a1a1a;
    padding: 8px;
    border-radius: 4px;
    font-size: 11px;
    overflow-x: auto;
    color: #a0a0a0;
    max-height: 200px;
    overflow-y: auto;
  }

  .loading,
  .error,
  .empty {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 40px 20px;
    color: #888;
  }

  .spinner {
    width: 40px;
    height: 40px;
    border: 3px solid #333;
    border-top-color: #3b82f6;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .error-icon,
  .empty-icon {
    font-size: 48px;
  }

  .retry-btn {
    background: #3b82f6;
    border: none;
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s;
  }

  .retry-btn:hover {
    background: #2563eb;
  }

  /* Scrollbar styling */
  .timeline-list::-webkit-scrollbar {
    width: 8px;
  }

  .timeline-list::-webkit-scrollbar-track {
    background: #1a1a1a;
    border-radius: 4px;
  }

  .timeline-list::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 4px;
  }

  .timeline-list::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .memory-timeline {
      padding: 12px;
    }

    .timeline-header h3 {
      font-size: 16px;
    }

    .timeline-item {
      padding: 10px;
      gap: 10px;
    }

    .event-marker {
      width: 28px;
      height: 28px;
    }

    .event-icon {
      font-size: 14px;
    }
  }
</style>
