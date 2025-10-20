import { Y as getContext, Z as escape_html, W as FILENAME } from "../../chunks/context.js";
import "clsx";
import "../../chunks/index-client.js";
import { p as push_element, a as pop_element } from "../../chunks/dev.js";
import { s as stores } from "../../chunks/client.js";
({
  check: stores.updated.check
});
function context() {
  return getContext("__request__");
}
function context_dev(name) {
  try {
    return context();
  } catch {
    throw new Error(
      `Can only read '${name}' on the server during rendering (not in e.g. \`load\` functions), as it is bound to the current request via component context. This prevents state from leaking between users.For more information, see https://svelte.dev/docs/kit/state-management#avoid-shared-state-on-the-server`
    );
  }
}
const page$1 = {
  get error() {
    return context_dev("page.error").page.error;
  },
  get status() {
    return context_dev("page.status").page.status;
  }
};
const page = page$1;
Error$1[FILENAME] = "node_modules/@sveltejs/kit/src/runtime/components/svelte-5/error.svelte";
function Error$1($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      $$renderer2.push(`<h1>`);
      push_element($$renderer2, "h1", 5, 0);
      $$renderer2.push(`${escape_html(page.status)}</h1>`);
      pop_element();
      $$renderer2.push(` <p>`);
      push_element($$renderer2, "p", 6, 0);
      $$renderer2.push(`${escape_html(page.error?.message)}</p>`);
      pop_element();
    },
    Error$1
  );
}
Error$1.render = function() {
  throw new Error$1("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
export {
  Error$1 as default
};
