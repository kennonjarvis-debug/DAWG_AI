(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/APPEND.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, value) {
    return [
        'APPEND',
        key,
        value
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BITCOUNT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, range) {
    const args = [
        'BITCOUNT',
        key
    ];
    if (range) {
        args.push(range.start.toString(), range.end.toString());
        if (range.mode) {
            args.push(range.mode);
        }
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BITFIELD_RO.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, operations) {
    const args = [
        'BITFIELD_RO',
        key
    ];
    for (const operation of operations){
        args.push('GET', operation.encoding, operation.offset.toString());
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BITFIELD.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, operations) {
    const args = [
        'BITFIELD',
        key
    ];
    for (const options of operations){
        switch(options.operation){
            case 'GET':
                args.push('GET', options.encoding, options.offset.toString());
                break;
            case 'SET':
                args.push('SET', options.encoding, options.offset.toString(), options.value.toString());
                break;
            case 'INCRBY':
                args.push('INCRBY', options.encoding, options.offset.toString(), options.increment.toString());
                break;
            case 'OVERFLOW':
                args.push('OVERFLOW', options.behavior);
                break;
        }
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformRangeReply = exports.pushSlotRangesArguments = exports.pushSortArguments = exports.transformFunctionListItemReply = exports.RedisFunctionFlags = exports.transformCommandReply = exports.CommandCategories = exports.CommandFlags = exports.pushOptionalVerdictArgument = exports.pushVerdictArgument = exports.pushVerdictNumberArguments = exports.pushVerdictArguments = exports.pushEvalArguments = exports.evalFirstKeyIndex = exports.transformPXAT = exports.transformEXAT = exports.transformGeoMembersWithReply = exports.GeoReplyWith = exports.pushGeoRadiusStoreArguments = exports.pushGeoRadiusArguments = exports.pushGeoSearchArguments = exports.pushGeoCountArgument = exports.transformLMPopArguments = exports.transformZMPopArguments = exports.transformSortedSetWithScoresReply = exports.transformSortedSetMemberReply = exports.transformSortedSetMemberNullReply = exports.transformStreamsMessagesReply = exports.transformStreamMessagesNullReply = exports.transformStreamMessagesReply = exports.transformStreamMessageNullReply = exports.transformStreamMessageReply = exports.transformTuplesReply = exports.transformStringNumberInfinityArgument = exports.transformNumberInfinityArgument = exports.transformNumberInfinityNullArrayReply = exports.transformNumberInfinityNullReply = exports.transformNumberInfinityReply = exports.pushScanArguments = exports.transformBooleanArrayReply = exports.transformBooleanReply = void 0;
function transformBooleanReply(reply) {
    return reply === 1;
}
exports.transformBooleanReply = transformBooleanReply;
function transformBooleanArrayReply(reply) {
    return reply.map(transformBooleanReply);
}
exports.transformBooleanArrayReply = transformBooleanArrayReply;
function pushScanArguments(args, cursor, options) {
    args.push(cursor.toString());
    if (options === null || options === void 0 ? void 0 : options.MATCH) {
        args.push('MATCH', options.MATCH);
    }
    if (options === null || options === void 0 ? void 0 : options.COUNT) {
        args.push('COUNT', options.COUNT.toString());
    }
    return args;
}
exports.pushScanArguments = pushScanArguments;
function transformNumberInfinityReply(reply) {
    switch(reply.toString()){
        case '+inf':
            return Infinity;
        case '-inf':
            return -Infinity;
        default:
            return Number(reply);
    }
}
exports.transformNumberInfinityReply = transformNumberInfinityReply;
function transformNumberInfinityNullReply(reply) {
    if (reply === null) return null;
    return transformNumberInfinityReply(reply);
}
exports.transformNumberInfinityNullReply = transformNumberInfinityNullReply;
function transformNumberInfinityNullArrayReply(reply) {
    return reply.map(transformNumberInfinityNullReply);
}
exports.transformNumberInfinityNullArrayReply = transformNumberInfinityNullArrayReply;
function transformNumberInfinityArgument(num) {
    switch(num){
        case Infinity:
            return '+inf';
        case -Infinity:
            return '-inf';
        default:
            return num.toString();
    }
}
exports.transformNumberInfinityArgument = transformNumberInfinityArgument;
function transformStringNumberInfinityArgument(num) {
    if (typeof num !== 'number') return num;
    return transformNumberInfinityArgument(num);
}
exports.transformStringNumberInfinityArgument = transformStringNumberInfinityArgument;
function transformTuplesReply(reply) {
    const message = Object.create(null);
    for(let i = 0; i < reply.length; i += 2){
        message[reply[i].toString()] = reply[i + 1];
    }
    return message;
}
exports.transformTuplesReply = transformTuplesReply;
function transformStreamMessageReply(param) {
    let [id, message] = param;
    return {
        id,
        message: transformTuplesReply(message)
    };
}
exports.transformStreamMessageReply = transformStreamMessageReply;
function transformStreamMessageNullReply(reply) {
    if (reply === null) return null;
    return transformStreamMessageReply(reply);
}
exports.transformStreamMessageNullReply = transformStreamMessageNullReply;
function transformStreamMessagesReply(reply) {
    return reply.map(transformStreamMessageReply);
}
exports.transformStreamMessagesReply = transformStreamMessagesReply;
function transformStreamMessagesNullReply(reply) {
    return reply.map(transformStreamMessageNullReply);
}
exports.transformStreamMessagesNullReply = transformStreamMessagesNullReply;
function transformStreamsMessagesReply(reply) {
    if (reply === null) return null;
    return reply.map((param)=>{
        let [name, rawMessages] = param;
        return {
            name,
            messages: transformStreamMessagesReply(rawMessages)
        };
    });
}
exports.transformStreamsMessagesReply = transformStreamsMessagesReply;
function transformSortedSetMemberNullReply(reply) {
    if (!reply.length) return null;
    return transformSortedSetMemberReply(reply);
}
exports.transformSortedSetMemberNullReply = transformSortedSetMemberNullReply;
function transformSortedSetMemberReply(reply) {
    return {
        value: reply[0],
        score: transformNumberInfinityReply(reply[1])
    };
}
exports.transformSortedSetMemberReply = transformSortedSetMemberReply;
function transformSortedSetWithScoresReply(reply) {
    const members = [];
    for(let i = 0; i < reply.length; i += 2){
        members.push({
            value: reply[i],
            score: transformNumberInfinityReply(reply[i + 1])
        });
    }
    return members;
}
exports.transformSortedSetWithScoresReply = transformSortedSetWithScoresReply;
function transformZMPopArguments(args, keys, side, options) {
    pushVerdictArgument(args, keys);
    args.push(side);
    if (options === null || options === void 0 ? void 0 : options.COUNT) {
        args.push('COUNT', options.COUNT.toString());
    }
    return args;
}
exports.transformZMPopArguments = transformZMPopArguments;
function transformLMPopArguments(args, keys, side, options) {
    pushVerdictArgument(args, keys);
    args.push(side);
    if (options === null || options === void 0 ? void 0 : options.COUNT) {
        args.push('COUNT', options.COUNT.toString());
    }
    return args;
}
exports.transformLMPopArguments = transformLMPopArguments;
function pushGeoCountArgument(args, count) {
    if (typeof count === 'number') {
        args.push('COUNT', count.toString());
    } else if (count) {
        args.push('COUNT', count.value.toString());
        if (count.ANY) {
            args.push('ANY');
        }
    }
    return args;
}
exports.pushGeoCountArgument = pushGeoCountArgument;
function pushGeoSearchArguments(args, key, from, by, options) {
    args.push(key);
    if (typeof from === 'string') {
        args.push('FROMMEMBER', from);
    } else {
        args.push('FROMLONLAT', from.longitude.toString(), from.latitude.toString());
    }
    if ('radius' in by) {
        args.push('BYRADIUS', by.radius.toString());
    } else {
        args.push('BYBOX', by.width.toString(), by.height.toString());
    }
    args.push(by.unit);
    if (options === null || options === void 0 ? void 0 : options.SORT) {
        args.push(options.SORT);
    }
    pushGeoCountArgument(args, options === null || options === void 0 ? void 0 : options.COUNT);
    return args;
}
exports.pushGeoSearchArguments = pushGeoSearchArguments;
function pushGeoRadiusArguments(args, key, from, radius, unit, options) {
    args.push(key);
    if (typeof from === 'string') {
        args.push(from);
    } else {
        args.push(from.longitude.toString(), from.latitude.toString());
    }
    args.push(radius.toString(), unit);
    if (options === null || options === void 0 ? void 0 : options.SORT) {
        args.push(options.SORT);
    }
    pushGeoCountArgument(args, options === null || options === void 0 ? void 0 : options.COUNT);
    return args;
}
exports.pushGeoRadiusArguments = pushGeoRadiusArguments;
function pushGeoRadiusStoreArguments(args, key, from, radius, unit, destination, options) {
    pushGeoRadiusArguments(args, key, from, radius, unit, options);
    if (options === null || options === void 0 ? void 0 : options.STOREDIST) {
        args.push('STOREDIST', destination);
    } else {
        args.push('STORE', destination);
    }
    return args;
}
exports.pushGeoRadiusStoreArguments = pushGeoRadiusStoreArguments;
var GeoReplyWith;
(function(GeoReplyWith) {
    GeoReplyWith["DISTANCE"] = "WITHDIST";
    GeoReplyWith["HASH"] = "WITHHASH";
    GeoReplyWith["COORDINATES"] = "WITHCOORD";
})(GeoReplyWith || (exports.GeoReplyWith = GeoReplyWith = {}));
function transformGeoMembersWithReply(reply, replyWith) {
    const replyWithSet = new Set(replyWith);
    let index = 0;
    const distanceIndex = replyWithSet.has(GeoReplyWith.DISTANCE) && ++index, hashIndex = replyWithSet.has(GeoReplyWith.HASH) && ++index, coordinatesIndex = replyWithSet.has(GeoReplyWith.COORDINATES) && ++index;
    return reply.map((member)=>{
        const transformedMember = {
            member: member[0]
        };
        if (distanceIndex) {
            transformedMember.distance = member[distanceIndex];
        }
        if (hashIndex) {
            transformedMember.hash = member[hashIndex];
        }
        if (coordinatesIndex) {
            const [longitude, latitude] = member[coordinatesIndex];
            transformedMember.coordinates = {
                longitude,
                latitude
            };
        }
        return transformedMember;
    });
}
exports.transformGeoMembersWithReply = transformGeoMembersWithReply;
function transformEXAT(EXAT) {
    return (typeof EXAT === 'number' ? EXAT : Math.floor(EXAT.getTime() / 1000)).toString();
}
exports.transformEXAT = transformEXAT;
function transformPXAT(PXAT) {
    return (typeof PXAT === 'number' ? PXAT : PXAT.getTime()).toString();
}
exports.transformPXAT = transformPXAT;
function evalFirstKeyIndex(options) {
    var _options_keys;
    return options === null || options === void 0 ? void 0 : (_options_keys = options.keys) === null || _options_keys === void 0 ? void 0 : _options_keys[0];
}
exports.evalFirstKeyIndex = evalFirstKeyIndex;
function pushEvalArguments(args, options) {
    if (options === null || options === void 0 ? void 0 : options.keys) {
        args.push(options.keys.length.toString(), ...options.keys);
    } else {
        args.push('0');
    }
    if (options === null || options === void 0 ? void 0 : options.arguments) {
        args.push(...options.arguments);
    }
    return args;
}
exports.pushEvalArguments = pushEvalArguments;
function pushVerdictArguments(args, value) {
    if (Array.isArray(value)) {
        // https://github.com/redis/node-redis/pull/2160
        args = args.concat(value);
    } else {
        args.push(value);
    }
    return args;
}
exports.pushVerdictArguments = pushVerdictArguments;
function pushVerdictNumberArguments(args, value) {
    if (Array.isArray(value)) {
        for (const item of value){
            args.push(item.toString());
        }
    } else {
        args.push(value.toString());
    }
    return args;
}
exports.pushVerdictNumberArguments = pushVerdictNumberArguments;
function pushVerdictArgument(args, value) {
    if (Array.isArray(value)) {
        args.push(value.length.toString(), ...value);
    } else {
        args.push('1', value);
    }
    return args;
}
exports.pushVerdictArgument = pushVerdictArgument;
function pushOptionalVerdictArgument(args, name, value) {
    if (value === undefined) return args;
    args.push(name);
    return pushVerdictArgument(args, value);
}
exports.pushOptionalVerdictArgument = pushOptionalVerdictArgument;
var CommandFlags;
(function(CommandFlags) {
    CommandFlags["WRITE"] = "write";
    CommandFlags["READONLY"] = "readonly";
    CommandFlags["DENYOOM"] = "denyoom";
    CommandFlags["ADMIN"] = "admin";
    CommandFlags["PUBSUB"] = "pubsub";
    CommandFlags["NOSCRIPT"] = "noscript";
    CommandFlags["RANDOM"] = "random";
    CommandFlags["SORT_FOR_SCRIPT"] = "sort_for_script";
    CommandFlags["LOADING"] = "loading";
    CommandFlags["STALE"] = "stale";
    CommandFlags["SKIP_MONITOR"] = "skip_monitor";
    CommandFlags["ASKING"] = "asking";
    CommandFlags["FAST"] = "fast";
    CommandFlags["MOVABLEKEYS"] = "movablekeys"; // keys have no pre-determined position. You must discover keys yourself.
})(CommandFlags || (exports.CommandFlags = CommandFlags = {}));
var CommandCategories;
(function(CommandCategories) {
    CommandCategories["KEYSPACE"] = "@keyspace";
    CommandCategories["READ"] = "@read";
    CommandCategories["WRITE"] = "@write";
    CommandCategories["SET"] = "@set";
    CommandCategories["SORTEDSET"] = "@sortedset";
    CommandCategories["LIST"] = "@list";
    CommandCategories["HASH"] = "@hash";
    CommandCategories["STRING"] = "@string";
    CommandCategories["BITMAP"] = "@bitmap";
    CommandCategories["HYPERLOGLOG"] = "@hyperloglog";
    CommandCategories["GEO"] = "@geo";
    CommandCategories["STREAM"] = "@stream";
    CommandCategories["PUBSUB"] = "@pubsub";
    CommandCategories["ADMIN"] = "@admin";
    CommandCategories["FAST"] = "@fast";
    CommandCategories["SLOW"] = "@slow";
    CommandCategories["BLOCKING"] = "@blocking";
    CommandCategories["DANGEROUS"] = "@dangerous";
    CommandCategories["CONNECTION"] = "@connection";
    CommandCategories["TRANSACTION"] = "@transaction";
    CommandCategories["SCRIPTING"] = "@scripting";
})(CommandCategories || (exports.CommandCategories = CommandCategories = {}));
function transformCommandReply(param) {
    let [name, arity, flags, firstKeyIndex, lastKeyIndex, step, categories] = param;
    return {
        name,
        arity,
        flags: new Set(flags),
        firstKeyIndex,
        lastKeyIndex,
        step,
        categories: new Set(categories)
    };
}
exports.transformCommandReply = transformCommandReply;
var RedisFunctionFlags;
(function(RedisFunctionFlags) {
    RedisFunctionFlags["NO_WRITES"] = "no-writes";
    RedisFunctionFlags["ALLOW_OOM"] = "allow-oom";
    RedisFunctionFlags["ALLOW_STALE"] = "allow-stale";
    RedisFunctionFlags["NO_CLUSTER"] = "no-cluster";
})(RedisFunctionFlags || (exports.RedisFunctionFlags = RedisFunctionFlags = {}));
function transformFunctionListItemReply(reply) {
    return {
        libraryName: reply[1],
        engine: reply[3],
        functions: reply[5].map((fn)=>({
                name: fn[1],
                description: fn[3],
                flags: fn[5]
            }))
    };
}
exports.transformFunctionListItemReply = transformFunctionListItemReply;
function pushSortArguments(args, options) {
    if (options === null || options === void 0 ? void 0 : options.BY) {
        args.push('BY', options.BY);
    }
    if (options === null || options === void 0 ? void 0 : options.LIMIT) {
        args.push('LIMIT', options.LIMIT.offset.toString(), options.LIMIT.count.toString());
    }
    if (options === null || options === void 0 ? void 0 : options.GET) {
        for (const pattern of typeof options.GET === 'string' ? [
            options.GET
        ] : options.GET){
            args.push('GET', pattern);
        }
    }
    if (options === null || options === void 0 ? void 0 : options.DIRECTION) {
        args.push(options.DIRECTION);
    }
    if (options === null || options === void 0 ? void 0 : options.ALPHA) {
        args.push('ALPHA');
    }
    return args;
}
exports.pushSortArguments = pushSortArguments;
function pushSlotRangeArguments(args, range) {
    args.push(range.start.toString(), range.end.toString());
}
function pushSlotRangesArguments(args, ranges) {
    if (Array.isArray(ranges)) {
        for (const range of ranges){
            pushSlotRangeArguments(args, range);
        }
    } else {
        pushSlotRangeArguments(args, ranges);
    }
    return args;
}
exports.pushSlotRangesArguments = pushSlotRangesArguments;
function transformRangeReply(param) {
    let [start, end] = param;
    return {
        start,
        end
    };
}
exports.transformRangeReply = transformRangeReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BITOP.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 2;
function transformArguments(operation, destKey, key) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'BITOP',
        operation,
        destKey
    ], key);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BITPOS.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, bit, start, end, mode) {
    const args = [
        'BITPOS',
        key,
        bit.toString()
    ];
    if (typeof start === 'number') {
        args.push(start.toString());
    }
    if (typeof end === 'number') {
        args.push(end.toString());
    }
    if (mode) {
        args.push(mode);
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BLMOVE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(source, destination, sourceDirection, destinationDirection, timeout) {
    return [
        'BLMOVE',
        source,
        destination,
        sourceDirection,
        destinationDirection,
        timeout.toString()
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LMPOP.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 2;
function transformArguments(keys, side, options) {
    return (0, generic_transformers_1.transformLMPopArguments)([
        'LMPOP'
    ], keys, side, options);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BLMPOP.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 3;
function transformArguments(timeout, keys, side, options) {
    return (0, generic_transformers_1.transformLMPopArguments)([
        'BLMPOP',
        timeout.toString()
    ], keys, side, options);
}
exports.transformArguments = transformArguments;
var LMPOP_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LMPOP.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return LMPOP_1.transformReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BLPOP.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(keys, timeout) {
    const args = (0, generic_transformers_1.pushVerdictArguments)([
        'BLPOP'
    ], keys);
    args.push(timeout.toString());
    return args;
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    if (reply === null) return null;
    return {
        key: reply[0],
        element: reply[1]
    };
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BRPOP.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, timeout) {
    const args = (0, generic_transformers_1.pushVerdictArguments)([
        'BRPOP'
    ], key);
    args.push(timeout.toString());
    return args;
}
exports.transformArguments = transformArguments;
var BLPOP_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BLPOP.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return BLPOP_1.transformReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BRPOPLPUSH.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(source, destination, timeout) {
    return [
        'BRPOPLPUSH',
        source,
        destination,
        timeout.toString()
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZMPOP.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 2;
function transformArguments(keys, side, options) {
    return (0, generic_transformers_1.transformZMPopArguments)([
        'ZMPOP'
    ], keys, side, options);
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    return reply === null ? null : {
        key: reply[0],
        elements: reply[1].map(generic_transformers_1.transformSortedSetMemberReply)
    };
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BZMPOP.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 3;
function transformArguments(timeout, keys, side, options) {
    return (0, generic_transformers_1.transformZMPopArguments)([
        'BZMPOP',
        timeout.toString()
    ], keys, side, options);
}
exports.transformArguments = transformArguments;
var ZMPOP_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZMPOP.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return ZMPOP_1.transformReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BZPOPMAX.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, timeout) {
    const args = (0, generic_transformers_1.pushVerdictArguments)([
        'BZPOPMAX'
    ], key);
    args.push(timeout.toString());
    return args;
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    if (!reply) return null;
    return {
        key: reply[0],
        value: reply[1],
        score: (0, generic_transformers_1.transformNumberInfinityReply)(reply[2])
    };
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BZPOPMIN.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, timeout) {
    const args = (0, generic_transformers_1.pushVerdictArguments)([
        'BZPOPMIN'
    ], key);
    args.push(timeout.toString());
    return args;
}
exports.transformArguments = transformArguments;
var BZPOPMAX_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BZPOPMAX.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return BZPOPMAX_1.transformReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/COPY.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(source, destination, options) {
    const args = [
        'COPY',
        source,
        destination
    ];
    if (options === null || options === void 0 ? void 0 : options.destinationDb) {
        args.push('DB', options.destinationDb.toString());
    }
    if (options === null || options === void 0 ? void 0 : options.replace) {
        args.push('REPLACE');
    }
    return args;
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformBooleanReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/DECR.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key) {
    return [
        'DECR',
        key
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/DECRBY.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, decrement) {
    return [
        'DECRBY',
        key,
        decrement.toString()
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/DEL.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(keys) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'DEL'
    ], keys);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/DUMP.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key) {
    return [
        'DUMP',
        key
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/EVAL_RO.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = generic_transformers_1.evalFirstKeyIndex;
exports.IS_READ_ONLY = true;
function transformArguments(script, options) {
    return (0, generic_transformers_1.pushEvalArguments)([
        'EVAL_RO',
        script
    ], options);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/EVAL.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = generic_transformers_1.evalFirstKeyIndex;
function transformArguments(script, options) {
    return (0, generic_transformers_1.pushEvalArguments)([
        'EVAL',
        script
    ], options);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/EVALSHA_RO.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = generic_transformers_1.evalFirstKeyIndex;
exports.IS_READ_ONLY = true;
function transformArguments(sha1, options) {
    return (0, generic_transformers_1.pushEvalArguments)([
        'EVALSHA_RO',
        sha1
    ], options);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/EVALSHA.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = generic_transformers_1.evalFirstKeyIndex;
function transformArguments(sha1, options) {
    return (0, generic_transformers_1.pushEvalArguments)([
        'EVALSHA',
        sha1
    ], options);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/EXISTS.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(keys) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'EXISTS'
    ], keys);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/EXPIRE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, seconds, mode) {
    const args = [
        'EXPIRE',
        key,
        seconds.toString()
    ];
    if (mode) {
        args.push(mode);
    }
    return args;
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformBooleanReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/EXPIREAT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, timestamp, mode) {
    const args = [
        'EXPIREAT',
        key,
        (0, generic_transformers_1.transformEXAT)(timestamp)
    ];
    if (mode) {
        args.push(mode);
    }
    return args;
}
exports.transformArguments = transformArguments;
var generic_transformers_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_2.transformBooleanReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/EXPIRETIME.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key) {
    return [
        'EXPIRETIME',
        key
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/FCALL_RO.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = generic_transformers_1.evalFirstKeyIndex;
exports.IS_READ_ONLY = true;
function transformArguments(fn, options) {
    return (0, generic_transformers_1.pushEvalArguments)([
        'FCALL_RO',
        fn
    ], options);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/FCALL.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = generic_transformers_1.evalFirstKeyIndex;
function transformArguments(fn, options) {
    return (0, generic_transformers_1.pushEvalArguments)([
        'FCALL',
        fn
    ], options);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEOADD.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, toAdd, options) {
    const args = [
        'GEOADD',
        key
    ];
    if (options === null || options === void 0 ? void 0 : options.NX) {
        args.push('NX');
    } else if (options === null || options === void 0 ? void 0 : options.XX) {
        args.push('XX');
    }
    if (options === null || options === void 0 ? void 0 : options.CH) {
        args.push('CH');
    }
    for (const { longitude, latitude, member } of Array.isArray(toAdd) ? toAdd : [
        toAdd
    ]){
        args.push(longitude.toString(), latitude.toString(), member);
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEODIST.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, member1, member2, unit) {
    const args = [
        'GEODIST',
        key,
        member1,
        member2
    ];
    if (unit) {
        args.push(unit);
    }
    return args;
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    return reply === null ? null : Number(reply);
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEOHASH.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, member) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'GEOHASH',
        key
    ], member);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEOPOS.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, member) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'GEOPOS',
        key
    ], member);
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    return reply.map((coordinates)=>coordinates === null ? null : {
            longitude: coordinates[0],
            latitude: coordinates[1]
        });
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEORADIUS_RO.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, coordinates, radius, unit, options) {
    return (0, generic_transformers_1.pushGeoRadiusArguments)([
        'GEORADIUS_RO'
    ], key, coordinates, radius, unit, options);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEORADIUS_RO_WITH.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const GEORADIUS_RO_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEORADIUS_RO.js [app-client] (ecmascript)");
var GEORADIUS_RO_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEORADIUS_RO.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function() {
        return GEORADIUS_RO_2.FIRST_KEY_INDEX;
    }
});
Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function() {
        return GEORADIUS_RO_2.IS_READ_ONLY;
    }
});
function transformArguments(key, coordinates, radius, unit, replyWith, options) {
    const args = (0, GEORADIUS_RO_1.transformArguments)(key, coordinates, radius, unit, options);
    args.push(...replyWith);
    args.preserve = replyWith;
    return args;
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformGeoMembersWithReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEORADIUS.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, coordinates, radius, unit, options) {
    return (0, generic_transformers_1.pushGeoRadiusArguments)([
        'GEORADIUS'
    ], key, coordinates, radius, unit, options);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEORADIUS_WITH.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const GEORADIUS_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEORADIUS.js [app-client] (ecmascript)");
var GEORADIUS_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEORADIUS.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function() {
        return GEORADIUS_2.FIRST_KEY_INDEX;
    }
});
Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function() {
        return GEORADIUS_2.IS_READ_ONLY;
    }
});
function transformArguments(key, coordinates, radius, unit, replyWith, options) {
    const args = (0, GEORADIUS_1.transformArguments)(key, coordinates, radius, unit, options);
    args.push(...replyWith);
    args.preserve = replyWith;
    return args;
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformGeoMembersWithReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBER_RO.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, member, radius, unit, options) {
    return (0, generic_transformers_1.pushGeoRadiusArguments)([
        'GEORADIUSBYMEMBER_RO'
    ], key, member, radius, unit, options);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBER_RO_WITH.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const GEORADIUSBYMEMBER_RO_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBER_RO.js [app-client] (ecmascript)");
var GEORADIUSBYMEMBER_RO_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBER_RO.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function() {
        return GEORADIUSBYMEMBER_RO_2.FIRST_KEY_INDEX;
    }
});
Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function() {
        return GEORADIUSBYMEMBER_RO_2.IS_READ_ONLY;
    }
});
function transformArguments(key, member, radius, unit, replyWith, options) {
    const args = (0, GEORADIUSBYMEMBER_RO_1.transformArguments)(key, member, radius, unit, options);
    args.push(...replyWith);
    args.preserve = replyWith;
    return args;
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformGeoMembersWithReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBER.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, member, radius, unit, options) {
    return (0, generic_transformers_1.pushGeoRadiusArguments)([
        'GEORADIUSBYMEMBER'
    ], key, member, radius, unit, options);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBER_WITH.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const GEORADIUSBYMEMBER_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBER.js [app-client] (ecmascript)");
var GEORADIUSBYMEMBER_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBER.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function() {
        return GEORADIUSBYMEMBER_2.FIRST_KEY_INDEX;
    }
});
Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function() {
        return GEORADIUSBYMEMBER_2.IS_READ_ONLY;
    }
});
function transformArguments(key, member, radius, unit, replyWith, options) {
    const args = (0, GEORADIUSBYMEMBER_1.transformArguments)(key, member, radius, unit, options);
    args.push(...replyWith);
    args.preserve = replyWith;
    return args;
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformGeoMembersWithReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBERSTORE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
var GEORADIUSBYMEMBER_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBER.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function() {
        return GEORADIUSBYMEMBER_1.FIRST_KEY_INDEX;
    }
});
Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function() {
        return GEORADIUSBYMEMBER_1.IS_READ_ONLY;
    }
});
function transformArguments(key, member, radius, unit, destination, options) {
    return (0, generic_transformers_1.pushGeoRadiusStoreArguments)([
        'GEORADIUSBYMEMBER'
    ], key, member, radius, unit, destination, options);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEORADIUSSTORE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
var GEORADIUS_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEORADIUS.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function() {
        return GEORADIUS_1.FIRST_KEY_INDEX;
    }
});
Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function() {
        return GEORADIUS_1.IS_READ_ONLY;
    }
});
function transformArguments(key, coordinates, radius, unit, destination, options) {
    return (0, generic_transformers_1.pushGeoRadiusStoreArguments)([
        'GEORADIUS'
    ], key, coordinates, radius, unit, destination, options);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEOSEARCH.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, from, by, options) {
    return (0, generic_transformers_1.pushGeoSearchArguments)([
        'GEOSEARCH'
    ], key, from, by, options);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEOSEARCH_WITH.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const GEOSEARCH_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEOSEARCH.js [app-client] (ecmascript)");
var GEOSEARCH_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEOSEARCH.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function() {
        return GEOSEARCH_2.FIRST_KEY_INDEX;
    }
});
Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function() {
        return GEOSEARCH_2.IS_READ_ONLY;
    }
});
function transformArguments(key, from, by, replyWith, options) {
    const args = (0, GEOSEARCH_1.transformArguments)(key, from, by, options);
    args.push(...replyWith);
    args.preserve = replyWith;
    return args;
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformGeoMembersWithReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEOSEARCHSTORE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
var GEOSEARCH_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEOSEARCH.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function() {
        return GEOSEARCH_1.FIRST_KEY_INDEX;
    }
});
Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function() {
        return GEOSEARCH_1.IS_READ_ONLY;
    }
});
function transformArguments(destination, source, from, by, options) {
    const args = (0, generic_transformers_1.pushGeoSearchArguments)([
        'GEOSEARCHSTORE',
        destination
    ], source, from, by, options);
    if (options === null || options === void 0 ? void 0 : options.STOREDIST) {
        args.push('STOREDIST');
    }
    return args;
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    if (typeof reply !== 'number') {
        throw new TypeError("https://github.com/redis/redis/issues/9261");
    }
    return reply;
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GET.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key) {
    return [
        'GET',
        key
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GETBIT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, offset) {
    return [
        'GETBIT',
        key,
        offset.toString()
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GETDEL.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key) {
    return [
        'GETDEL',
        key
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GETEX.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, mode) {
    const args = [
        'GETEX',
        key
    ];
    if ('EX' in mode) {
        args.push('EX', mode.EX.toString());
    } else if ('PX' in mode) {
        args.push('PX', mode.PX.toString());
    } else if ('EXAT' in mode) {
        args.push('EXAT', (0, generic_transformers_1.transformEXAT)(mode.EXAT));
    } else if ('PXAT' in mode) {
        args.push('PXAT', (0, generic_transformers_1.transformPXAT)(mode.PXAT));
    } else {
        args.push('PERSIST');
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GETRANGE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, start, end) {
    return [
        'GETRANGE',
        key,
        start.toString(),
        end.toString()
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GETSET.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, value) {
    return [
        'GETSET',
        key,
        value
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HDEL.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, field) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'HDEL',
        key
    ], field);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HEXISTS.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, field) {
    return [
        'HEXISTS',
        key,
        field
    ];
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformBooleanReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HEXPIRE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = exports.HASH_EXPIRATION = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
/**
 * @readonly
 * @enum {number}
 */ exports.HASH_EXPIRATION = {
    /** @property {number} */ /** The field does not exist */ FIELD_NOT_EXISTS: -2,
    /** @property {number} */ /** Specified NX | XX | GT | LT condition not met */ CONDITION_NOT_MET: 0,
    /** @property {number} */ /** Expiration time was set or updated */ UPDATED: 1,
    /** @property {number} */ /** Field deleted because the specified expiration time is in the past */ DELETED: 2
};
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, fields, seconds, mode) {
    const args = [
        'HEXPIRE',
        key,
        seconds.toString()
    ];
    if (mode) {
        args.push(mode);
    }
    args.push('FIELDS');
    return (0, generic_transformers_1.pushVerdictArgument)(args, fields);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HEXPIREAT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, fields, timestamp, mode) {
    const args = [
        'HEXPIREAT',
        key,
        (0, generic_transformers_1.transformEXAT)(timestamp)
    ];
    if (mode) {
        args.push(mode);
    }
    args.push('FIELDS');
    return (0, generic_transformers_1.pushVerdictArgument)(args, fields);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HEXPIRETIME.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = exports.HASH_EXPIRATION_TIME = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.HASH_EXPIRATION_TIME = {
    /** @property {number} */ /** The field does not exist */ FIELD_NOT_EXISTS: -2,
    /** @property {number} */ /** The field exists but has no associated expire */ NO_EXPIRATION: -1
};
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, fields) {
    return (0, generic_transformers_1.pushVerdictArgument)([
        'HEXPIRETIME',
        key,
        'FIELDS'
    ], fields);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HGET.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, field) {
    return [
        'HGET',
        key,
        field
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HGETALL.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.TRANSFORM_LEGACY_REPLY = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
exports.TRANSFORM_LEGACY_REPLY = true;
function transformArguments(key) {
    return [
        'HGETALL',
        key
    ];
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformTuplesReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HINCRBY.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, field, increment) {
    return [
        'HINCRBY',
        key,
        field,
        increment.toString()
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HINCRBYFLOAT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, field, increment) {
    return [
        'HINCRBYFLOAT',
        key,
        field,
        increment.toString()
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HKEYS.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key) {
    return [
        'HKEYS',
        key
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HLEN.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key) {
    return [
        'HLEN',
        key
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HMGET.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, fields) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'HMGET',
        key
    ], fields);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HPERSIST.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, fields) {
    return (0, generic_transformers_1.pushVerdictArgument)([
        'HPERSIST',
        key,
        'FIELDS'
    ], fields);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HPEXPIRE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, fields, ms, mode) {
    const args = [
        'HPEXPIRE',
        key,
        ms.toString()
    ];
    if (mode) {
        args.push(mode);
    }
    args.push('FIELDS');
    return (0, generic_transformers_1.pushVerdictArgument)(args, fields);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HPEXPIREAT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, fields, timestamp, mode) {
    const args = [
        'HPEXPIREAT',
        key,
        (0, generic_transformers_1.transformPXAT)(timestamp)
    ];
    if (mode) {
        args.push(mode);
    }
    args.push('FIELDS');
    return (0, generic_transformers_1.pushVerdictArgument)(args, fields);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HPEXPIRETIME.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, fields) {
    return (0, generic_transformers_1.pushVerdictArgument)([
        'HPEXPIRETIME',
        key,
        'FIELDS'
    ], fields);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HPTTL.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, fields) {
    return (0, generic_transformers_1.pushVerdictArgument)([
        'HPTTL',
        key,
        'FIELDS'
    ], fields);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HRANDFIELD.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key) {
    return [
        'HRANDFIELD',
        key
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HRANDFIELD_COUNT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const HRANDFIELD_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HRANDFIELD.js [app-client] (ecmascript)");
var HRANDFIELD_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HRANDFIELD.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function() {
        return HRANDFIELD_2.FIRST_KEY_INDEX;
    }
});
Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function() {
        return HRANDFIELD_2.IS_READ_ONLY;
    }
});
function transformArguments(key, count) {
    return [
        ...(0, HRANDFIELD_1.transformArguments)(key),
        count.toString()
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HRANDFIELD_COUNT_WITHVALUES.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const HRANDFIELD_COUNT_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HRANDFIELD_COUNT.js [app-client] (ecmascript)");
var HRANDFIELD_COUNT_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HRANDFIELD_COUNT.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function() {
        return HRANDFIELD_COUNT_2.FIRST_KEY_INDEX;
    }
});
Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function() {
        return HRANDFIELD_COUNT_2.IS_READ_ONLY;
    }
});
function transformArguments(key, count) {
    return [
        ...(0, HRANDFIELD_COUNT_1.transformArguments)(key, count),
        'WITHVALUES'
    ];
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformTuplesReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HSCAN.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, cursor, options) {
    return (0, generic_transformers_1.pushScanArguments)([
        'HSCAN',
        key
    ], cursor, options);
}
exports.transformArguments = transformArguments;
function transformReply(param) {
    let [cursor, rawTuples] = param;
    const parsedTuples = [];
    for(let i = 0; i < rawTuples.length; i += 2){
        parsedTuples.push({
            field: rawTuples[i],
            value: rawTuples[i + 1]
        });
    }
    return {
        cursor: Number(cursor),
        tuples: parsedTuples
    };
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HSCAN_NOVALUES.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const HSCAN_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HSCAN.js [app-client] (ecmascript)");
var HSCAN_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HSCAN.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function() {
        return HSCAN_2.FIRST_KEY_INDEX;
    }
});
Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function() {
        return HSCAN_2.IS_READ_ONLY;
    }
});
function transformArguments(key, cursor, options) {
    const args = (0, HSCAN_1.transformArguments)(key, cursor, options);
    args.push('NOVALUES');
    return args;
}
exports.transformArguments = transformArguments;
function transformReply(param) {
    let [cursor, rawData] = param;
    return {
        cursor: Number(cursor),
        keys: rawData
    };
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HSET.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$dawg$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/dawg-ai/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments() {
    for(var _len = arguments.length, _tmp = new Array(_len), _key = 0; _key < _len; _key++){
        _tmp[_key] = arguments[_key];
    }
    let [key, value, fieldValue] = _tmp;
    const args = [
        'HSET',
        key
    ];
    if (typeof value === 'string' || typeof value === 'number' || __TURBOPACK__imported__module__$5b$project$5d2f$dawg$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].isBuffer(value)) {
        args.push(convertValue(value), convertValue(fieldValue));
    } else if (value instanceof Map) {
        pushMap(args, value);
    } else if (Array.isArray(value)) {
        pushTuples(args, value);
    } else {
        pushObject(args, value);
    }
    return args;
}
exports.transformArguments = transformArguments;
function pushMap(args, map) {
    for (const [key, value] of map.entries()){
        args.push(convertValue(key), convertValue(value));
    }
}
function pushTuples(args, tuples) {
    for (const tuple of tuples){
        if (Array.isArray(tuple)) {
            pushTuples(args, tuple);
            continue;
        }
        args.push(convertValue(tuple));
    }
}
function pushObject(args, object) {
    for (const key of Object.keys(object)){
        args.push(convertValue(key), convertValue(object[key]));
    }
}
function convertValue(value) {
    return typeof value === 'number' ? value.toString() : value;
}
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HSETNX.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, field, value) {
    return [
        'HSETNX',
        key,
        field,
        value
    ];
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformBooleanReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HSTRLEN.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, field) {
    return [
        'HSTRLEN',
        key,
        field
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HTTL.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, fields) {
    return (0, generic_transformers_1.pushVerdictArgument)([
        'HTTL',
        key,
        'FIELDS'
    ], fields);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HVALS.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key) {
    return [
        'HVALS',
        key
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/INCR.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key) {
    return [
        'INCR',
        key
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/INCRBY.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, increment) {
    return [
        'INCRBY',
        key,
        increment.toString()
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/INCRBYFLOAT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, increment) {
    return [
        'INCRBYFLOAT',
        key,
        increment.toString()
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LCS.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key1, key2) {
    return [
        'LCS',
        key1,
        key2
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LCS_IDX_WITHMATCHLEN.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
const LCS_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LCS.js [app-client] (ecmascript)");
var LCS_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LCS.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function() {
        return LCS_2.FIRST_KEY_INDEX;
    }
});
Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function() {
        return LCS_2.IS_READ_ONLY;
    }
});
function transformArguments(key1, key2) {
    const args = (0, LCS_1.transformArguments)(key1, key2);
    args.push('IDX', 'WITHMATCHLEN');
    return args;
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    return {
        matches: reply[1].map((param)=>{
            let [key1, key2, length] = param;
            return {
                key1: (0, generic_transformers_1.transformRangeReply)(key1),
                key2: (0, generic_transformers_1.transformRangeReply)(key2),
                length
            };
        }),
        length: reply[3]
    };
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LCS_IDX.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
const LCS_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LCS.js [app-client] (ecmascript)");
var LCS_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LCS.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function() {
        return LCS_2.FIRST_KEY_INDEX;
    }
});
Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function() {
        return LCS_2.IS_READ_ONLY;
    }
});
function transformArguments(key1, key2) {
    const args = (0, LCS_1.transformArguments)(key1, key2);
    args.push('IDX');
    return args;
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    return {
        matches: reply[1].map((param)=>{
            let [key1, key2] = param;
            return {
                key1: (0, generic_transformers_1.transformRangeReply)(key1),
                key2: (0, generic_transformers_1.transformRangeReply)(key2)
            };
        }),
        length: reply[3]
    };
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LCS_LEN.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const LCS_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LCS.js [app-client] (ecmascript)");
var LCS_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LCS.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function() {
        return LCS_2.FIRST_KEY_INDEX;
    }
});
Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function() {
        return LCS_2.IS_READ_ONLY;
    }
});
function transformArguments(key1, key2) {
    const args = (0, LCS_1.transformArguments)(key1, key2);
    args.push('LEN');
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LINDEX.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, index) {
    return [
        'LINDEX',
        key,
        index.toString()
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LINSERT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, position, pivot, element) {
    return [
        'LINSERT',
        key,
        position,
        pivot,
        element
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LLEN.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key) {
    return [
        'LLEN',
        key
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LMOVE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(source, destination, sourceSide, destinationSide) {
    return [
        'LMOVE',
        source,
        destination,
        sourceSide,
        destinationSide
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LPOP_COUNT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, count) {
    return [
        'LPOP',
        key,
        count.toString()
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LPOP.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key) {
    return [
        'LPOP',
        key
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LPOS.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, element, options) {
    const args = [
        'LPOS',
        key,
        element
    ];
    if (typeof (options === null || options === void 0 ? void 0 : options.RANK) === 'number') {
        args.push('RANK', options.RANK.toString());
    }
    if (typeof (options === null || options === void 0 ? void 0 : options.MAXLEN) === 'number') {
        args.push('MAXLEN', options.MAXLEN.toString());
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LPOS_COUNT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
var LPOS_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LPOS.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function() {
        return LPOS_1.FIRST_KEY_INDEX;
    }
});
Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function() {
        return LPOS_1.IS_READ_ONLY;
    }
});
function transformArguments(key, element, count, options) {
    const args = [
        'LPOS',
        key,
        element
    ];
    if (typeof (options === null || options === void 0 ? void 0 : options.RANK) === 'number') {
        args.push('RANK', options.RANK.toString());
    }
    args.push('COUNT', count.toString());
    if (typeof (options === null || options === void 0 ? void 0 : options.MAXLEN) === 'number') {
        args.push('MAXLEN', options.MAXLEN.toString());
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LPUSH.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, elements) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'LPUSH',
        key
    ], elements);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LPUSHX.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, element) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'LPUSHX',
        key
    ], element);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LRANGE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, start, stop) {
    return [
        'LRANGE',
        key,
        start.toString(),
        stop.toString()
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LREM.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, count, element) {
    return [
        'LREM',
        key,
        count.toString(),
        element
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LSET.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, index, element) {
    return [
        'LSET',
        key,
        index.toString(),
        element
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LTRIM.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, start, stop) {
    return [
        'LTRIM',
        key,
        start.toString(),
        stop.toString()
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/MGET.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(keys) {
    return [
        'MGET',
        ...keys
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/MIGRATE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(host, port, key, destinationDb, timeout, options) {
    const args = [
        'MIGRATE',
        host,
        port.toString()
    ], isKeyArray = Array.isArray(key);
    if (isKeyArray) {
        args.push('');
    } else {
        args.push(key);
    }
    args.push(destinationDb.toString(), timeout.toString());
    if (options === null || options === void 0 ? void 0 : options.COPY) {
        args.push('COPY');
    }
    if (options === null || options === void 0 ? void 0 : options.REPLACE) {
        args.push('REPLACE');
    }
    if (options === null || options === void 0 ? void 0 : options.AUTH) {
        if (options.AUTH.username) {
            args.push('AUTH2', options.AUTH.username, options.AUTH.password);
        } else {
            args.push('AUTH', options.AUTH.password);
        }
    }
    if (isKeyArray) {
        args.push('KEYS', ...key);
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/MSET.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(toSet) {
    const args = [
        'MSET'
    ];
    if (Array.isArray(toSet)) {
        args.push(...toSet.flat());
    } else {
        for (const key of Object.keys(toSet)){
            args.push(key, toSet[key]);
        }
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/MSETNX.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(toSet) {
    const args = [
        'MSETNX'
    ];
    if (Array.isArray(toSet)) {
        args.push(...toSet.flat());
    } else {
        for (const key of Object.keys(toSet)){
            args.push(key, toSet[key]);
        }
    }
    return args;
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformBooleanReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/OBJECT_ENCODING.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 2;
exports.IS_READ_ONLY = true;
function transformArguments(key) {
    return [
        'OBJECT',
        'ENCODING',
        key
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/OBJECT_FREQ.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 2;
exports.IS_READ_ONLY = true;
function transformArguments(key) {
    return [
        'OBJECT',
        'FREQ',
        key
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/OBJECT_IDLETIME.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 2;
exports.IS_READ_ONLY = true;
function transformArguments(key) {
    return [
        'OBJECT',
        'IDLETIME',
        key
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/OBJECT_REFCOUNT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 2;
exports.IS_READ_ONLY = true;
function transformArguments(key) {
    return [
        'OBJECT',
        'REFCOUNT',
        key
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PERSIST.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key) {
    return [
        'PERSIST',
        key
    ];
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformBooleanReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PEXPIRE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, milliseconds, mode) {
    const args = [
        'PEXPIRE',
        key,
        milliseconds.toString()
    ];
    if (mode) {
        args.push(mode);
    }
    return args;
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformBooleanReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PEXPIREAT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, millisecondsTimestamp, mode) {
    const args = [
        'PEXPIREAT',
        key,
        (0, generic_transformers_1.transformPXAT)(millisecondsTimestamp)
    ];
    if (mode) {
        args.push(mode);
    }
    return args;
}
exports.transformArguments = transformArguments;
var generic_transformers_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_2.transformBooleanReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PEXPIRETIME.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key) {
    return [
        'PEXPIRETIME',
        key
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PFADD.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, element) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'PFADD',
        key
    ], element);
}
exports.transformArguments = transformArguments;
var generic_transformers_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_2.transformBooleanReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PFCOUNT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'PFCOUNT'
    ], key);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PFMERGE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(destination, source) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'PFMERGE',
        destination
    ], source);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PSETEX.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, milliseconds, value) {
    return [
        'PSETEX',
        key,
        milliseconds.toString(),
        value
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PTTL.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key) {
    return [
        'PTTL',
        key
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PUBLISH.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = void 0;
exports.IS_READ_ONLY = true;
function transformArguments(channel, message) {
    return [
        'PUBLISH',
        channel,
        message
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/RENAME.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, newKey) {
    return [
        'RENAME',
        key,
        newKey
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/RENAMENX.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, newKey) {
    return [
        'RENAMENX',
        key,
        newKey
    ];
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformBooleanReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/RESTORE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, ttl, serializedValue, options) {
    const args = [
        'RESTORE',
        key,
        ttl.toString(),
        serializedValue
    ];
    if (options === null || options === void 0 ? void 0 : options.REPLACE) {
        args.push('REPLACE');
    }
    if (options === null || options === void 0 ? void 0 : options.ABSTTL) {
        args.push('ABSTTL');
    }
    if (options === null || options === void 0 ? void 0 : options.IDLETIME) {
        args.push('IDLETIME', options.IDLETIME.toString());
    }
    if (options === null || options === void 0 ? void 0 : options.FREQ) {
        args.push('FREQ', options.FREQ.toString());
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/RPOP_COUNT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, count) {
    return [
        'RPOP',
        key,
        count.toString()
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/RPOP.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key) {
    return [
        'RPOP',
        key
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/RPOPLPUSH.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(source, destination) {
    return [
        'RPOPLPUSH',
        source,
        destination
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/RPUSH.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, element) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'RPUSH',
        key
    ], element);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/RPUSHX.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, element) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'RPUSHX',
        key
    ], element);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SADD.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, members) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'SADD',
        key
    ], members);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SCARD.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key) {
    return [
        'SCARD',
        key
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SDIFF.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(keys) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'SDIFF'
    ], keys);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SDIFFSTORE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(destination, keys) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'SDIFFSTORE',
        destination
    ], keys);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SET.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, value, options) {
    const args = [
        'SET',
        key,
        typeof value === 'number' ? value.toString() : value
    ];
    if ((options === null || options === void 0 ? void 0 : options.EX) !== undefined) {
        args.push('EX', options.EX.toString());
    } else if ((options === null || options === void 0 ? void 0 : options.PX) !== undefined) {
        args.push('PX', options.PX.toString());
    } else if ((options === null || options === void 0 ? void 0 : options.EXAT) !== undefined) {
        args.push('EXAT', options.EXAT.toString());
    } else if ((options === null || options === void 0 ? void 0 : options.PXAT) !== undefined) {
        args.push('PXAT', options.PXAT.toString());
    } else if (options === null || options === void 0 ? void 0 : options.KEEPTTL) {
        args.push('KEEPTTL');
    }
    if (options === null || options === void 0 ? void 0 : options.NX) {
        args.push('NX');
    } else if (options === null || options === void 0 ? void 0 : options.XX) {
        args.push('XX');
    }
    if (options === null || options === void 0 ? void 0 : options.GET) {
        args.push('GET');
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SETBIT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, offset, value) {
    return [
        'SETBIT',
        key,
        offset.toString(),
        value.toString()
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SETEX.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, seconds, value) {
    return [
        'SETEX',
        key,
        seconds.toString(),
        value
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SETNX.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, value) {
    return [
        'SETNX',
        key,
        value
    ];
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformBooleanReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SETRANGE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, offset, value) {
    return [
        'SETRANGE',
        key,
        offset.toString(),
        value
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SINTER.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(keys) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'SINTER'
    ], keys);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SINTERCARD.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 2;
exports.IS_READ_ONLY = true;
function transformArguments(keys, limit) {
    const args = (0, generic_transformers_1.pushVerdictArgument)([
        'SINTERCARD'
    ], keys);
    if (limit) {
        args.push('LIMIT', limit.toString());
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SINTERSTORE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(destination, keys) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'SINTERSTORE',
        destination
    ], keys);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SISMEMBER.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, member) {
    return [
        'SISMEMBER',
        key,
        member
    ];
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformBooleanReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SMEMBERS.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key) {
    return [
        'SMEMBERS',
        key
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SMISMEMBER.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, members) {
    return [
        'SMISMEMBER',
        key,
        ...members
    ];
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformBooleanArrayReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SMOVE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(source, destination, member) {
    return [
        'SMOVE',
        source,
        destination,
        member
    ];
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformBooleanReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SORT_RO.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, options) {
    return (0, generic_transformers_1.pushSortArguments)([
        'SORT_RO',
        key
    ], options);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SORT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, options) {
    return (0, generic_transformers_1.pushSortArguments)([
        'SORT',
        key
    ], options);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SORT_STORE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const SORT_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SORT.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(source, destination, options) {
    const args = (0, SORT_1.transformArguments)(source, options);
    args.push('STORE', destination);
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SPOP.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, count) {
    const args = [
        'SPOP',
        key
    ];
    if (typeof count === 'number') {
        args.push(count.toString());
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SPUBLISH.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = exports.IS_READ_ONLY = void 0;
exports.IS_READ_ONLY = true;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(channel, message) {
    return [
        'SPUBLISH',
        channel,
        message
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SRANDMEMBER.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key) {
    return [
        'SRANDMEMBER',
        key
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SRANDMEMBER_COUNT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const SRANDMEMBER_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SRANDMEMBER.js [app-client] (ecmascript)");
var SRANDMEMBER_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SRANDMEMBER.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function() {
        return SRANDMEMBER_2.FIRST_KEY_INDEX;
    }
});
function transformArguments(key, count) {
    return [
        ...(0, SRANDMEMBER_1.transformArguments)(key),
        count.toString()
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SREM.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, members) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'SREM',
        key
    ], members);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SSCAN.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, cursor, options) {
    return (0, generic_transformers_1.pushScanArguments)([
        'SSCAN',
        key
    ], cursor, options);
}
exports.transformArguments = transformArguments;
function transformReply(param) {
    let [cursor, members] = param;
    return {
        cursor: Number(cursor),
        members
    };
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/STRLEN.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key) {
    return [
        'STRLEN',
        key
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SUNION.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(keys) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'SUNION'
    ], keys);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SUNIONSTORE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(destination, keys) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'SUNIONSTORE',
        destination
    ], keys);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/TOUCH.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'TOUCH'
    ], key);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/TTL.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key) {
    return [
        'TTL',
        key
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/TYPE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key) {
    return [
        'TYPE',
        key
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/UNLINK.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'UNLINK'
    ], key);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/WATCH.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'WATCH'
    ], key);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XACK.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, group, id) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'XACK',
        key,
        group
    ], id);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XADD.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, id, message, options) {
    const args = [
        'XADD',
        key
    ];
    if (options === null || options === void 0 ? void 0 : options.NOMKSTREAM) {
        args.push('NOMKSTREAM');
    }
    if (options === null || options === void 0 ? void 0 : options.TRIM) {
        if (options.TRIM.strategy) {
            args.push(options.TRIM.strategy);
        }
        if (options.TRIM.strategyModifier) {
            args.push(options.TRIM.strategyModifier);
        }
        args.push(options.TRIM.threshold.toString());
        if (options.TRIM.limit) {
            args.push('LIMIT', options.TRIM.limit.toString());
        }
    }
    args.push(id);
    for (const [key, value] of Object.entries(message)){
        args.push(key, value);
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XAUTOCLAIM.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, group, consumer, minIdleTime, start, options) {
    const args = [
        'XAUTOCLAIM',
        key,
        group,
        consumer,
        minIdleTime.toString(),
        start
    ];
    if (options === null || options === void 0 ? void 0 : options.COUNT) {
        args.push('COUNT', options.COUNT.toString());
    }
    return args;
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    return {
        nextId: reply[0],
        messages: (0, generic_transformers_1.transformStreamMessagesNullReply)(reply[1])
    };
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XAUTOCLAIM_JUSTID.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const XAUTOCLAIM_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XAUTOCLAIM.js [app-client] (ecmascript)");
var XAUTOCLAIM_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XAUTOCLAIM.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function() {
        return XAUTOCLAIM_2.FIRST_KEY_INDEX;
    }
});
function transformArguments() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return [
        ...(0, XAUTOCLAIM_1.transformArguments)(...args),
        'JUSTID'
    ];
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    return {
        nextId: reply[0],
        messages: reply[1]
    };
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XCLAIM.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, group, consumer, minIdleTime, id, options) {
    const args = (0, generic_transformers_1.pushVerdictArguments)([
        'XCLAIM',
        key,
        group,
        consumer,
        minIdleTime.toString()
    ], id);
    if (options === null || options === void 0 ? void 0 : options.IDLE) {
        args.push('IDLE', options.IDLE.toString());
    }
    if (options === null || options === void 0 ? void 0 : options.TIME) {
        args.push('TIME', (typeof options.TIME === 'number' ? options.TIME : options.TIME.getTime()).toString());
    }
    if (options === null || options === void 0 ? void 0 : options.RETRYCOUNT) {
        args.push('RETRYCOUNT', options.RETRYCOUNT.toString());
    }
    if (options === null || options === void 0 ? void 0 : options.FORCE) {
        args.push('FORCE');
    }
    return args;
}
exports.transformArguments = transformArguments;
var generic_transformers_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_2.transformStreamMessagesNullReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XCLAIM_JUSTID.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const XCLAIM_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XCLAIM.js [app-client] (ecmascript)");
var XCLAIM_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XCLAIM.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function() {
        return XCLAIM_2.FIRST_KEY_INDEX;
    }
});
function transformArguments() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return [
        ...(0, XCLAIM_1.transformArguments)(...args),
        'JUSTID'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XDEL.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, id) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'XDEL',
        key
    ], id);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XGROUP_CREATE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 2;
function transformArguments(key, group, id, options) {
    const args = [
        'XGROUP',
        'CREATE',
        key,
        group,
        id
    ];
    if (options === null || options === void 0 ? void 0 : options.MKSTREAM) {
        args.push('MKSTREAM');
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XGROUP_CREATECONSUMER.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 2;
function transformArguments(key, group, consumer) {
    return [
        'XGROUP',
        'CREATECONSUMER',
        key,
        group,
        consumer
    ];
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformBooleanReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XGROUP_DELCONSUMER.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 2;
function transformArguments(key, group, consumer) {
    return [
        'XGROUP',
        'DELCONSUMER',
        key,
        group,
        consumer
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XGROUP_DESTROY.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 2;
function transformArguments(key, group) {
    return [
        'XGROUP',
        'DESTROY',
        key,
        group
    ];
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformBooleanReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XGROUP_SETID.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 2;
function transformArguments(key, group, id) {
    return [
        'XGROUP',
        'SETID',
        key,
        group,
        id
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XINFO_CONSUMERS.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 2;
exports.IS_READ_ONLY = true;
function transformArguments(key, group) {
    return [
        'XINFO',
        'CONSUMERS',
        key,
        group
    ];
}
exports.transformArguments = transformArguments;
function transformReply(rawReply) {
    return rawReply.map((consumer)=>({
            name: consumer[1],
            pending: consumer[3],
            idle: consumer[5],
            inactive: consumer[7]
        }));
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XINFO_GROUPS.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 2;
exports.IS_READ_ONLY = true;
function transformArguments(key) {
    return [
        'XINFO',
        'GROUPS',
        key
    ];
}
exports.transformArguments = transformArguments;
function transformReply(rawReply) {
    return rawReply.map((group)=>({
            name: group[1],
            consumers: group[3],
            pending: group[5],
            lastDeliveredId: group[7]
        }));
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XINFO_STREAM.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 2;
exports.IS_READ_ONLY = true;
function transformArguments(key) {
    return [
        'XINFO',
        'STREAM',
        key
    ];
}
exports.transformArguments = transformArguments;
function transformReply(rawReply) {
    const parsedReply = {};
    for(let i = 0; i < rawReply.length; i += 2){
        switch(rawReply[i]){
            case 'length':
                parsedReply.length = rawReply[i + 1];
                break;
            case 'radix-tree-keys':
                parsedReply.radixTreeKeys = rawReply[i + 1];
                break;
            case 'radix-tree-nodes':
                parsedReply.radixTreeNodes = rawReply[i + 1];
                break;
            case 'groups':
                parsedReply.groups = rawReply[i + 1];
                break;
            case 'last-generated-id':
                parsedReply.lastGeneratedId = rawReply[i + 1];
                break;
            case 'first-entry':
                parsedReply.firstEntry = rawReply[i + 1] ? {
                    id: rawReply[i + 1][0],
                    message: (0, generic_transformers_1.transformTuplesReply)(rawReply[i + 1][1])
                } : null;
                break;
            case 'last-entry':
                parsedReply.lastEntry = rawReply[i + 1] ? {
                    id: rawReply[i + 1][0],
                    message: (0, generic_transformers_1.transformTuplesReply)(rawReply[i + 1][1])
                } : null;
                break;
        }
    }
    return parsedReply;
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XLEN.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key) {
    return [
        'XLEN',
        key
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XPENDING_RANGE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, group, start, end, count, options) {
    const args = [
        'XPENDING',
        key,
        group
    ];
    if (options === null || options === void 0 ? void 0 : options.IDLE) {
        args.push('IDLE', options.IDLE.toString());
    }
    args.push(start, end, count.toString());
    if (options === null || options === void 0 ? void 0 : options.consumer) {
        args.push(options.consumer);
    }
    return args;
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    return reply.map((param)=>{
        let [id, owner, millisecondsSinceLastDelivery, deliveriesCounter] = param;
        return {
            id,
            owner,
            millisecondsSinceLastDelivery,
            deliveriesCounter
        };
    });
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XPENDING.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, group) {
    return [
        'XPENDING',
        key,
        group
    ];
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    return {
        pending: reply[0],
        firstId: reply[1],
        lastId: reply[2],
        consumers: reply[3] === null ? null : reply[3].map((param)=>{
            let [name, deliveriesCounter] = param;
            return {
                name,
                deliveriesCounter: Number(deliveriesCounter)
            };
        })
    };
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XRANGE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, start, end, options) {
    const args = [
        'XRANGE',
        key,
        start,
        end
    ];
    if (options === null || options === void 0 ? void 0 : options.COUNT) {
        args.push('COUNT', options.COUNT.toString());
    }
    return args;
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformStreamMessagesReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XREAD.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const FIRST_KEY_INDEX = (streams)=>{
    return Array.isArray(streams) ? streams[0].key : streams.key;
};
exports.FIRST_KEY_INDEX = FIRST_KEY_INDEX;
exports.IS_READ_ONLY = true;
function transformArguments(streams, options) {
    const args = [
        'XREAD'
    ];
    if (options === null || options === void 0 ? void 0 : options.COUNT) {
        args.push('COUNT', options.COUNT.toString());
    }
    if (typeof (options === null || options === void 0 ? void 0 : options.BLOCK) === 'number') {
        args.push('BLOCK', options.BLOCK.toString());
    }
    args.push('STREAMS');
    const streamsArray = Array.isArray(streams) ? streams : [
        streams
    ], argsLength = args.length;
    for(let i = 0; i < streamsArray.length; i++){
        const stream = streamsArray[i];
        args[argsLength + i] = stream.key;
        args[argsLength + streamsArray.length + i] = stream.id;
    }
    return args;
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformStreamsMessagesReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XREADGROUP.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const FIRST_KEY_INDEX = (_group, _consumer, streams)=>{
    return Array.isArray(streams) ? streams[0].key : streams.key;
};
exports.FIRST_KEY_INDEX = FIRST_KEY_INDEX;
exports.IS_READ_ONLY = true;
function transformArguments(group, consumer, streams, options) {
    const args = [
        'XREADGROUP',
        'GROUP',
        group,
        consumer
    ];
    if (options === null || options === void 0 ? void 0 : options.COUNT) {
        args.push('COUNT', options.COUNT.toString());
    }
    if (typeof (options === null || options === void 0 ? void 0 : options.BLOCK) === 'number') {
        args.push('BLOCK', options.BLOCK.toString());
    }
    if (options === null || options === void 0 ? void 0 : options.NOACK) {
        args.push('NOACK');
    }
    args.push('STREAMS');
    const streamsArray = Array.isArray(streams) ? streams : [
        streams
    ], argsLength = args.length;
    for(let i = 0; i < streamsArray.length; i++){
        const stream = streamsArray[i];
        args[argsLength + i] = stream.key;
        args[argsLength + streamsArray.length + i] = stream.id;
    }
    return args;
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformStreamsMessagesReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XREVRANGE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, start, end, options) {
    const args = [
        'XREVRANGE',
        key,
        start,
        end
    ];
    if (options === null || options === void 0 ? void 0 : options.COUNT) {
        args.push('COUNT', options.COUNT.toString());
    }
    return args;
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformStreamMessagesReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XSETID.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, lastId, options) {
    const args = [
        'XSETID',
        key,
        lastId
    ];
    if (options === null || options === void 0 ? void 0 : options.ENTRIESADDED) {
        args.push('ENTRIESADDED', options.ENTRIESADDED.toString());
    }
    if (options === null || options === void 0 ? void 0 : options.MAXDELETEDID) {
        args.push('MAXDELETEDID', options.MAXDELETEDID);
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XTRIM.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, strategy, threshold, options) {
    const args = [
        'XTRIM',
        key,
        strategy
    ];
    if (options === null || options === void 0 ? void 0 : options.strategyModifier) {
        args.push(options.strategyModifier);
    }
    args.push(threshold.toString());
    if (options === null || options === void 0 ? void 0 : options.LIMIT) {
        args.push('LIMIT', options.LIMIT.toString());
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZADD.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, members, options) {
    const args = [
        'ZADD',
        key
    ];
    if (options === null || options === void 0 ? void 0 : options.NX) {
        args.push('NX');
    } else {
        if (options === null || options === void 0 ? void 0 : options.XX) {
            args.push('XX');
        }
        if (options === null || options === void 0 ? void 0 : options.GT) {
            args.push('GT');
        } else if (options === null || options === void 0 ? void 0 : options.LT) {
            args.push('LT');
        }
    }
    if (options === null || options === void 0 ? void 0 : options.CH) {
        args.push('CH');
    }
    if (options === null || options === void 0 ? void 0 : options.INCR) {
        args.push('INCR');
    }
    for (const { score, value } of Array.isArray(members) ? members : [
        members
    ]){
        args.push((0, generic_transformers_1.transformNumberInfinityArgument)(score), value);
    }
    return args;
}
exports.transformArguments = transformArguments;
var generic_transformers_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_2.transformNumberInfinityReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZCARD.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key) {
    return [
        'ZCARD',
        key
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZCOUNT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, min, max) {
    return [
        'ZCOUNT',
        key,
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(min),
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(max)
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZDIFF.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 2;
exports.IS_READ_ONLY = true;
function transformArguments(keys) {
    return (0, generic_transformers_1.pushVerdictArgument)([
        'ZDIFF'
    ], keys);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZDIFF_WITHSCORES.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const ZDIFF_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZDIFF.js [app-client] (ecmascript)");
var ZDIFF_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZDIFF.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function() {
        return ZDIFF_2.FIRST_KEY_INDEX;
    }
});
Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function() {
        return ZDIFF_2.IS_READ_ONLY;
    }
});
function transformArguments() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return [
        ...(0, ZDIFF_1.transformArguments)(...args),
        'WITHSCORES'
    ];
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformSortedSetWithScoresReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZDIFFSTORE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(destination, keys) {
    return (0, generic_transformers_1.pushVerdictArgument)([
        'ZDIFFSTORE',
        destination
    ], keys);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZINCRBY.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, increment, member) {
    return [
        'ZINCRBY',
        key,
        (0, generic_transformers_1.transformNumberInfinityArgument)(increment),
        member
    ];
}
exports.transformArguments = transformArguments;
var generic_transformers_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_2.transformNumberInfinityReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZINTER.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 2;
exports.IS_READ_ONLY = true;
function transformArguments(keys, options) {
    const args = (0, generic_transformers_1.pushVerdictArgument)([
        'ZINTER'
    ], keys);
    if (options === null || options === void 0 ? void 0 : options.WEIGHTS) {
        args.push('WEIGHTS', ...options.WEIGHTS.map((weight)=>weight.toString()));
    }
    if (options === null || options === void 0 ? void 0 : options.AGGREGATE) {
        args.push('AGGREGATE', options.AGGREGATE);
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZINTER_WITHSCORES.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const ZINTER_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZINTER.js [app-client] (ecmascript)");
var ZINTER_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZINTER.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function() {
        return ZINTER_2.FIRST_KEY_INDEX;
    }
});
Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function() {
        return ZINTER_2.IS_READ_ONLY;
    }
});
function transformArguments() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return [
        ...(0, ZINTER_1.transformArguments)(...args),
        'WITHSCORES'
    ];
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformSortedSetWithScoresReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZINTERCARD.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 2;
exports.IS_READ_ONLY = true;
function transformArguments(keys, limit) {
    const args = (0, generic_transformers_1.pushVerdictArgument)([
        'ZINTERCARD'
    ], keys);
    if (limit) {
        args.push('LIMIT', limit.toString());
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZINTERSTORE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(destination, keys, options) {
    const args = (0, generic_transformers_1.pushVerdictArgument)([
        'ZINTERSTORE',
        destination
    ], keys);
    if (options === null || options === void 0 ? void 0 : options.WEIGHTS) {
        args.push('WEIGHTS', ...options.WEIGHTS.map((weight)=>weight.toString()));
    }
    if (options === null || options === void 0 ? void 0 : options.AGGREGATE) {
        args.push('AGGREGATE', options.AGGREGATE);
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZLEXCOUNT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, min, max) {
    return [
        'ZLEXCOUNT',
        key,
        min,
        max
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZMSCORE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, member) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'ZMSCORE',
        key
    ], member);
}
exports.transformArguments = transformArguments;
var generic_transformers_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_2.transformNumberInfinityNullArrayReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZPOPMAX.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key) {
    return [
        'ZPOPMAX',
        key
    ];
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformSortedSetMemberNullReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZPOPMAX_COUNT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const ZPOPMAX_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZPOPMAX.js [app-client] (ecmascript)");
var ZPOPMAX_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZPOPMAX.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function() {
        return ZPOPMAX_2.FIRST_KEY_INDEX;
    }
});
function transformArguments(key, count) {
    return [
        ...(0, ZPOPMAX_1.transformArguments)(key),
        count.toString()
    ];
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformSortedSetWithScoresReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZPOPMIN.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key) {
    return [
        'ZPOPMIN',
        key
    ];
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformSortedSetMemberNullReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZPOPMIN_COUNT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const ZPOPMIN_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZPOPMIN.js [app-client] (ecmascript)");
var ZPOPMIN_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZPOPMIN.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function() {
        return ZPOPMIN_2.FIRST_KEY_INDEX;
    }
});
function transformArguments(key, count) {
    return [
        ...(0, ZPOPMIN_1.transformArguments)(key),
        count.toString()
    ];
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformSortedSetWithScoresReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZRANDMEMBER.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key) {
    return [
        'ZRANDMEMBER',
        key
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZRANDMEMBER_COUNT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const ZRANDMEMBER_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZRANDMEMBER.js [app-client] (ecmascript)");
var ZRANDMEMBER_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZRANDMEMBER.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function() {
        return ZRANDMEMBER_2.FIRST_KEY_INDEX;
    }
});
Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function() {
        return ZRANDMEMBER_2.IS_READ_ONLY;
    }
});
function transformArguments(key, count) {
    return [
        ...(0, ZRANDMEMBER_1.transformArguments)(key),
        count.toString()
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZRANDMEMBER_COUNT_WITHSCORES.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const ZRANDMEMBER_COUNT_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZRANDMEMBER_COUNT.js [app-client] (ecmascript)");
var ZRANDMEMBER_COUNT_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZRANDMEMBER_COUNT.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function() {
        return ZRANDMEMBER_COUNT_2.FIRST_KEY_INDEX;
    }
});
Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function() {
        return ZRANDMEMBER_COUNT_2.IS_READ_ONLY;
    }
});
function transformArguments() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return [
        ...(0, ZRANDMEMBER_COUNT_1.transformArguments)(...args),
        'WITHSCORES'
    ];
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformSortedSetWithScoresReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZRANGE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, min, max, options) {
    const args = [
        'ZRANGE',
        key,
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(min),
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(max)
    ];
    switch(options === null || options === void 0 ? void 0 : options.BY){
        case 'SCORE':
            args.push('BYSCORE');
            break;
        case 'LEX':
            args.push('BYLEX');
            break;
    }
    if (options === null || options === void 0 ? void 0 : options.REV) {
        args.push('REV');
    }
    if (options === null || options === void 0 ? void 0 : options.LIMIT) {
        args.push('LIMIT', options.LIMIT.offset.toString(), options.LIMIT.count.toString());
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZRANGE_WITHSCORES.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const ZRANGE_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZRANGE.js [app-client] (ecmascript)");
var ZRANGE_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZRANGE.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function() {
        return ZRANGE_2.FIRST_KEY_INDEX;
    }
});
Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function() {
        return ZRANGE_2.IS_READ_ONLY;
    }
});
function transformArguments() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return [
        ...(0, ZRANGE_1.transformArguments)(...args),
        'WITHSCORES'
    ];
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformSortedSetWithScoresReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZRANGEBYLEX.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, min, max, options) {
    const args = [
        'ZRANGEBYLEX',
        key,
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(min),
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(max)
    ];
    if (options === null || options === void 0 ? void 0 : options.LIMIT) {
        args.push('LIMIT', options.LIMIT.offset.toString(), options.LIMIT.count.toString());
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZRANGEBYSCORE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, min, max, options) {
    const args = [
        'ZRANGEBYSCORE',
        key,
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(min),
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(max)
    ];
    if (options === null || options === void 0 ? void 0 : options.LIMIT) {
        args.push('LIMIT', options.LIMIT.offset.toString(), options.LIMIT.count.toString());
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZRANGEBYSCORE_WITHSCORES.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const ZRANGEBYSCORE_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZRANGEBYSCORE.js [app-client] (ecmascript)");
var ZRANGEBYSCORE_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZRANGEBYSCORE.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function() {
        return ZRANGEBYSCORE_2.FIRST_KEY_INDEX;
    }
});
Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function() {
        return ZRANGEBYSCORE_2.IS_READ_ONLY;
    }
});
function transformArguments(key, min, max, options) {
    return [
        ...(0, ZRANGEBYSCORE_1.transformArguments)(key, min, max, options),
        'WITHSCORES'
    ];
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformSortedSetWithScoresReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZRANGESTORE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(dst, src, min, max, options) {
    const args = [
        'ZRANGESTORE',
        dst,
        src,
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(min),
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(max)
    ];
    switch(options === null || options === void 0 ? void 0 : options.BY){
        case 'SCORE':
            args.push('BYSCORE');
            break;
        case 'LEX':
            args.push('BYLEX');
            break;
    }
    if (options === null || options === void 0 ? void 0 : options.REV) {
        args.push('REV');
    }
    if (options === null || options === void 0 ? void 0 : options.LIMIT) {
        args.push('LIMIT', options.LIMIT.offset.toString(), options.LIMIT.count.toString());
    }
    if (options === null || options === void 0 ? void 0 : options.WITHSCORES) {
        args.push('WITHSCORES');
    }
    return args;
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    if (typeof reply !== 'number') {
        throw new TypeError("Upgrade to Redis 6.2.5 and up (https://github.com/redis/redis/pull/9089)");
    }
    return reply;
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZRANK.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, member) {
    return [
        'ZRANK',
        key,
        member
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZREM.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, member) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'ZREM',
        key
    ], member);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZREMRANGEBYLEX.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, min, max) {
    return [
        'ZREMRANGEBYLEX',
        key,
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(min),
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(max)
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZREMRANGEBYRANK.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, start, stop) {
    return [
        'ZREMRANGEBYRANK',
        key,
        start.toString(),
        stop.toString()
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZREMRANGEBYSCORE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, min, max) {
    return [
        'ZREMRANGEBYSCORE',
        key,
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(min),
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(max)
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZREVRANK.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, member) {
    return [
        'ZREVRANK',
        key,
        member
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZSCAN.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, cursor, options) {
    return (0, generic_transformers_1.pushScanArguments)([
        'ZSCAN',
        key
    ], cursor, options);
}
exports.transformArguments = transformArguments;
function transformReply(param) {
    let [cursor, rawMembers] = param;
    const parsedMembers = [];
    for(let i = 0; i < rawMembers.length; i += 2){
        parsedMembers.push({
            value: rawMembers[i],
            score: (0, generic_transformers_1.transformNumberInfinityReply)(rawMembers[i + 1])
        });
    }
    return {
        cursor: Number(cursor),
        members: parsedMembers
    };
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZSCORE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, member) {
    return [
        'ZSCORE',
        key,
        member
    ];
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformNumberInfinityNullReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZUNION.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 2;
exports.IS_READ_ONLY = true;
function transformArguments(keys, options) {
    const args = (0, generic_transformers_1.pushVerdictArgument)([
        'ZUNION'
    ], keys);
    if (options === null || options === void 0 ? void 0 : options.WEIGHTS) {
        args.push('WEIGHTS', ...options.WEIGHTS.map((weight)=>weight.toString()));
    }
    if (options === null || options === void 0 ? void 0 : options.AGGREGATE) {
        args.push('AGGREGATE', options.AGGREGATE);
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZUNION_WITHSCORES.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const ZUNION_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZUNION.js [app-client] (ecmascript)");
var ZUNION_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZUNION.js [app-client] (ecmascript)");
Object.defineProperty(exports, "FIRST_KEY_INDEX", {
    enumerable: true,
    get: function() {
        return ZUNION_2.FIRST_KEY_INDEX;
    }
});
Object.defineProperty(exports, "IS_READ_ONLY", {
    enumerable: true,
    get: function() {
        return ZUNION_2.IS_READ_ONLY;
    }
});
function transformArguments() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return [
        ...(0, ZUNION_1.transformArguments)(...args),
        'WITHSCORES'
    ];
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformSortedSetWithScoresReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZUNIONSTORE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(destination, keys, options) {
    const args = (0, generic_transformers_1.pushVerdictArgument)([
        'ZUNIONSTORE',
        destination
    ], keys);
    if (options === null || options === void 0 ? void 0 : options.WEIGHTS) {
        args.push('WEIGHTS', ...options.WEIGHTS.map((weight)=>weight.toString()));
    }
    if (options === null || options === void 0 ? void 0 : options.AGGREGATE) {
        args.push('AGGREGATE', options.AGGREGATE);
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/cluster/commands.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const APPEND = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/APPEND.js [app-client] (ecmascript)");
const BITCOUNT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BITCOUNT.js [app-client] (ecmascript)");
const BITFIELD_RO = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BITFIELD_RO.js [app-client] (ecmascript)");
const BITFIELD = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BITFIELD.js [app-client] (ecmascript)");
const BITOP = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BITOP.js [app-client] (ecmascript)");
const BITPOS = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BITPOS.js [app-client] (ecmascript)");
const BLMOVE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BLMOVE.js [app-client] (ecmascript)");
const BLMPOP = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BLMPOP.js [app-client] (ecmascript)");
const BLPOP = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BLPOP.js [app-client] (ecmascript)");
const BRPOP = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BRPOP.js [app-client] (ecmascript)");
const BRPOPLPUSH = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BRPOPLPUSH.js [app-client] (ecmascript)");
const BZMPOP = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BZMPOP.js [app-client] (ecmascript)");
const BZPOPMAX = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BZPOPMAX.js [app-client] (ecmascript)");
const BZPOPMIN = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BZPOPMIN.js [app-client] (ecmascript)");
const COPY = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/COPY.js [app-client] (ecmascript)");
const DECR = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/DECR.js [app-client] (ecmascript)");
const DECRBY = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/DECRBY.js [app-client] (ecmascript)");
const DEL = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/DEL.js [app-client] (ecmascript)");
const DUMP = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/DUMP.js [app-client] (ecmascript)");
const EVAL_RO = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/EVAL_RO.js [app-client] (ecmascript)");
const EVAL = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/EVAL.js [app-client] (ecmascript)");
const EVALSHA_RO = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/EVALSHA_RO.js [app-client] (ecmascript)");
const EVALSHA = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/EVALSHA.js [app-client] (ecmascript)");
const EXISTS = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/EXISTS.js [app-client] (ecmascript)");
const EXPIRE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/EXPIRE.js [app-client] (ecmascript)");
const EXPIREAT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/EXPIREAT.js [app-client] (ecmascript)");
const EXPIRETIME = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/EXPIRETIME.js [app-client] (ecmascript)");
const FCALL_RO = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/FCALL_RO.js [app-client] (ecmascript)");
const FCALL = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/FCALL.js [app-client] (ecmascript)");
const GEOADD = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEOADD.js [app-client] (ecmascript)");
const GEODIST = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEODIST.js [app-client] (ecmascript)");
const GEOHASH = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEOHASH.js [app-client] (ecmascript)");
const GEOPOS = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEOPOS.js [app-client] (ecmascript)");
const GEORADIUS_RO_WITH = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEORADIUS_RO_WITH.js [app-client] (ecmascript)");
const GEORADIUS_RO = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEORADIUS_RO.js [app-client] (ecmascript)");
const GEORADIUS_WITH = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEORADIUS_WITH.js [app-client] (ecmascript)");
const GEORADIUS = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEORADIUS.js [app-client] (ecmascript)");
const GEORADIUSBYMEMBER_RO_WITH = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBER_RO_WITH.js [app-client] (ecmascript)");
const GEORADIUSBYMEMBER_RO = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBER_RO.js [app-client] (ecmascript)");
const GEORADIUSBYMEMBER_WITH = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBER_WITH.js [app-client] (ecmascript)");
const GEORADIUSBYMEMBER = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBER.js [app-client] (ecmascript)");
const GEORADIUSBYMEMBERSTORE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBERSTORE.js [app-client] (ecmascript)");
const GEORADIUSSTORE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEORADIUSSTORE.js [app-client] (ecmascript)");
const GEOSEARCH_WITH = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEOSEARCH_WITH.js [app-client] (ecmascript)");
const GEOSEARCH = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEOSEARCH.js [app-client] (ecmascript)");
const GEOSEARCHSTORE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GEOSEARCHSTORE.js [app-client] (ecmascript)");
const GET = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GET.js [app-client] (ecmascript)");
const GETBIT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GETBIT.js [app-client] (ecmascript)");
const GETDEL = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GETDEL.js [app-client] (ecmascript)");
const GETEX = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GETEX.js [app-client] (ecmascript)");
const GETRANGE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GETRANGE.js [app-client] (ecmascript)");
const GETSET = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/GETSET.js [app-client] (ecmascript)");
const HDEL = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HDEL.js [app-client] (ecmascript)");
const HEXISTS = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HEXISTS.js [app-client] (ecmascript)");
const HEXPIRE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HEXPIRE.js [app-client] (ecmascript)");
const HEXPIREAT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HEXPIREAT.js [app-client] (ecmascript)");
const HEXPIRETIME = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HEXPIRETIME.js [app-client] (ecmascript)");
const HGET = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HGET.js [app-client] (ecmascript)");
const HGETALL = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HGETALL.js [app-client] (ecmascript)");
const HINCRBY = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HINCRBY.js [app-client] (ecmascript)");
const HINCRBYFLOAT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HINCRBYFLOAT.js [app-client] (ecmascript)");
const HKEYS = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HKEYS.js [app-client] (ecmascript)");
const HLEN = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HLEN.js [app-client] (ecmascript)");
const HMGET = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HMGET.js [app-client] (ecmascript)");
const HPERSIST = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HPERSIST.js [app-client] (ecmascript)");
const HPEXPIRE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HPEXPIRE.js [app-client] (ecmascript)");
const HPEXPIREAT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HPEXPIREAT.js [app-client] (ecmascript)");
const HPEXPIRETIME = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HPEXPIRETIME.js [app-client] (ecmascript)");
const HPTTL = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HPTTL.js [app-client] (ecmascript)");
const HRANDFIELD_COUNT_WITHVALUES = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HRANDFIELD_COUNT_WITHVALUES.js [app-client] (ecmascript)");
const HRANDFIELD_COUNT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HRANDFIELD_COUNT.js [app-client] (ecmascript)");
const HRANDFIELD = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HRANDFIELD.js [app-client] (ecmascript)");
const HSCAN = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HSCAN.js [app-client] (ecmascript)");
const HSCAN_NOVALUES = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HSCAN_NOVALUES.js [app-client] (ecmascript)");
const HSET = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HSET.js [app-client] (ecmascript)");
const HSETNX = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HSETNX.js [app-client] (ecmascript)");
const HSTRLEN = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HSTRLEN.js [app-client] (ecmascript)");
const HTTL = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HTTL.js [app-client] (ecmascript)");
const HVALS = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HVALS.js [app-client] (ecmascript)");
const INCR = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/INCR.js [app-client] (ecmascript)");
const INCRBY = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/INCRBY.js [app-client] (ecmascript)");
const INCRBYFLOAT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/INCRBYFLOAT.js [app-client] (ecmascript)");
const LCS_IDX_WITHMATCHLEN = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LCS_IDX_WITHMATCHLEN.js [app-client] (ecmascript)");
const LCS_IDX = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LCS_IDX.js [app-client] (ecmascript)");
const LCS_LEN = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LCS_LEN.js [app-client] (ecmascript)");
const LCS = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LCS.js [app-client] (ecmascript)");
const LINDEX = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LINDEX.js [app-client] (ecmascript)");
const LINSERT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LINSERT.js [app-client] (ecmascript)");
const LLEN = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LLEN.js [app-client] (ecmascript)");
const LMOVE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LMOVE.js [app-client] (ecmascript)");
const LMPOP = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LMPOP.js [app-client] (ecmascript)");
const LPOP_COUNT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LPOP_COUNT.js [app-client] (ecmascript)");
const LPOP = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LPOP.js [app-client] (ecmascript)");
const LPOS_COUNT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LPOS_COUNT.js [app-client] (ecmascript)");
const LPOS = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LPOS.js [app-client] (ecmascript)");
const LPUSH = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LPUSH.js [app-client] (ecmascript)");
const LPUSHX = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LPUSHX.js [app-client] (ecmascript)");
const LRANGE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LRANGE.js [app-client] (ecmascript)");
const LREM = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LREM.js [app-client] (ecmascript)");
const LSET = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LSET.js [app-client] (ecmascript)");
const LTRIM = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LTRIM.js [app-client] (ecmascript)");
const MGET = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/MGET.js [app-client] (ecmascript)");
const MIGRATE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/MIGRATE.js [app-client] (ecmascript)");
const MSET = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/MSET.js [app-client] (ecmascript)");
const MSETNX = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/MSETNX.js [app-client] (ecmascript)");
const OBJECT_ENCODING = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/OBJECT_ENCODING.js [app-client] (ecmascript)");
const OBJECT_FREQ = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/OBJECT_FREQ.js [app-client] (ecmascript)");
const OBJECT_IDLETIME = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/OBJECT_IDLETIME.js [app-client] (ecmascript)");
const OBJECT_REFCOUNT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/OBJECT_REFCOUNT.js [app-client] (ecmascript)");
const PERSIST = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PERSIST.js [app-client] (ecmascript)");
const PEXPIRE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PEXPIRE.js [app-client] (ecmascript)");
const PEXPIREAT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PEXPIREAT.js [app-client] (ecmascript)");
const PEXPIRETIME = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PEXPIRETIME.js [app-client] (ecmascript)");
const PFADD = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PFADD.js [app-client] (ecmascript)");
const PFCOUNT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PFCOUNT.js [app-client] (ecmascript)");
const PFMERGE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PFMERGE.js [app-client] (ecmascript)");
const PSETEX = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PSETEX.js [app-client] (ecmascript)");
const PTTL = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PTTL.js [app-client] (ecmascript)");
const PUBLISH = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PUBLISH.js [app-client] (ecmascript)");
const RENAME = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/RENAME.js [app-client] (ecmascript)");
const RENAMENX = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/RENAMENX.js [app-client] (ecmascript)");
const RESTORE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/RESTORE.js [app-client] (ecmascript)");
const RPOP_COUNT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/RPOP_COUNT.js [app-client] (ecmascript)");
const RPOP = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/RPOP.js [app-client] (ecmascript)");
const RPOPLPUSH = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/RPOPLPUSH.js [app-client] (ecmascript)");
const RPUSH = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/RPUSH.js [app-client] (ecmascript)");
const RPUSHX = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/RPUSHX.js [app-client] (ecmascript)");
const SADD = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SADD.js [app-client] (ecmascript)");
const SCARD = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SCARD.js [app-client] (ecmascript)");
const SDIFF = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SDIFF.js [app-client] (ecmascript)");
const SDIFFSTORE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SDIFFSTORE.js [app-client] (ecmascript)");
const SET = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SET.js [app-client] (ecmascript)");
const SETBIT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SETBIT.js [app-client] (ecmascript)");
const SETEX = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SETEX.js [app-client] (ecmascript)");
const SETNX = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SETNX.js [app-client] (ecmascript)");
const SETRANGE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SETRANGE.js [app-client] (ecmascript)");
const SINTER = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SINTER.js [app-client] (ecmascript)");
const SINTERCARD = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SINTERCARD.js [app-client] (ecmascript)");
const SINTERSTORE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SINTERSTORE.js [app-client] (ecmascript)");
const SISMEMBER = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SISMEMBER.js [app-client] (ecmascript)");
const SMEMBERS = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SMEMBERS.js [app-client] (ecmascript)");
const SMISMEMBER = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SMISMEMBER.js [app-client] (ecmascript)");
const SMOVE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SMOVE.js [app-client] (ecmascript)");
const SORT_RO = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SORT_RO.js [app-client] (ecmascript)");
const SORT_STORE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SORT_STORE.js [app-client] (ecmascript)");
const SORT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SORT.js [app-client] (ecmascript)");
const SPOP = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SPOP.js [app-client] (ecmascript)");
const SPUBLISH = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SPUBLISH.js [app-client] (ecmascript)");
const SRANDMEMBER_COUNT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SRANDMEMBER_COUNT.js [app-client] (ecmascript)");
const SRANDMEMBER = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SRANDMEMBER.js [app-client] (ecmascript)");
const SREM = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SREM.js [app-client] (ecmascript)");
const SSCAN = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SSCAN.js [app-client] (ecmascript)");
const STRLEN = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/STRLEN.js [app-client] (ecmascript)");
const SUNION = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SUNION.js [app-client] (ecmascript)");
const SUNIONSTORE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SUNIONSTORE.js [app-client] (ecmascript)");
const TOUCH = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/TOUCH.js [app-client] (ecmascript)");
const TTL = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/TTL.js [app-client] (ecmascript)");
const TYPE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/TYPE.js [app-client] (ecmascript)");
const UNLINK = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/UNLINK.js [app-client] (ecmascript)");
const WATCH = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/WATCH.js [app-client] (ecmascript)");
const XACK = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XACK.js [app-client] (ecmascript)");
const XADD = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XADD.js [app-client] (ecmascript)");
const XAUTOCLAIM_JUSTID = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XAUTOCLAIM_JUSTID.js [app-client] (ecmascript)");
const XAUTOCLAIM = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XAUTOCLAIM.js [app-client] (ecmascript)");
const XCLAIM_JUSTID = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XCLAIM_JUSTID.js [app-client] (ecmascript)");
const XCLAIM = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XCLAIM.js [app-client] (ecmascript)");
const XDEL = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XDEL.js [app-client] (ecmascript)");
const XGROUP_CREATE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XGROUP_CREATE.js [app-client] (ecmascript)");
const XGROUP_CREATECONSUMER = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XGROUP_CREATECONSUMER.js [app-client] (ecmascript)");
const XGROUP_DELCONSUMER = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XGROUP_DELCONSUMER.js [app-client] (ecmascript)");
const XGROUP_DESTROY = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XGROUP_DESTROY.js [app-client] (ecmascript)");
const XGROUP_SETID = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XGROUP_SETID.js [app-client] (ecmascript)");
const XINFO_CONSUMERS = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XINFO_CONSUMERS.js [app-client] (ecmascript)");
const XINFO_GROUPS = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XINFO_GROUPS.js [app-client] (ecmascript)");
const XINFO_STREAM = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XINFO_STREAM.js [app-client] (ecmascript)");
const XLEN = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XLEN.js [app-client] (ecmascript)");
const XPENDING_RANGE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XPENDING_RANGE.js [app-client] (ecmascript)");
const XPENDING = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XPENDING.js [app-client] (ecmascript)");
const XRANGE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XRANGE.js [app-client] (ecmascript)");
const XREAD = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XREAD.js [app-client] (ecmascript)");
const XREADGROUP = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XREADGROUP.js [app-client] (ecmascript)");
const XREVRANGE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XREVRANGE.js [app-client] (ecmascript)");
const XSETID = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XSETID.js [app-client] (ecmascript)");
const XTRIM = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/XTRIM.js [app-client] (ecmascript)");
const ZADD = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZADD.js [app-client] (ecmascript)");
const ZCARD = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZCARD.js [app-client] (ecmascript)");
const ZCOUNT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZCOUNT.js [app-client] (ecmascript)");
const ZDIFF_WITHSCORES = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZDIFF_WITHSCORES.js [app-client] (ecmascript)");
const ZDIFF = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZDIFF.js [app-client] (ecmascript)");
const ZDIFFSTORE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZDIFFSTORE.js [app-client] (ecmascript)");
const ZINCRBY = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZINCRBY.js [app-client] (ecmascript)");
const ZINTER_WITHSCORES = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZINTER_WITHSCORES.js [app-client] (ecmascript)");
const ZINTER = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZINTER.js [app-client] (ecmascript)");
const ZINTERCARD = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZINTERCARD.js [app-client] (ecmascript)");
const ZINTERSTORE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZINTERSTORE.js [app-client] (ecmascript)");
const ZLEXCOUNT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZLEXCOUNT.js [app-client] (ecmascript)");
const ZMPOP = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZMPOP.js [app-client] (ecmascript)");
const ZMSCORE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZMSCORE.js [app-client] (ecmascript)");
const ZPOPMAX_COUNT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZPOPMAX_COUNT.js [app-client] (ecmascript)");
const ZPOPMAX = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZPOPMAX.js [app-client] (ecmascript)");
const ZPOPMIN_COUNT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZPOPMIN_COUNT.js [app-client] (ecmascript)");
const ZPOPMIN = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZPOPMIN.js [app-client] (ecmascript)");
const ZRANDMEMBER_COUNT_WITHSCORES = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZRANDMEMBER_COUNT_WITHSCORES.js [app-client] (ecmascript)");
const ZRANDMEMBER_COUNT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZRANDMEMBER_COUNT.js [app-client] (ecmascript)");
const ZRANDMEMBER = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZRANDMEMBER.js [app-client] (ecmascript)");
const ZRANGE_WITHSCORES = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZRANGE_WITHSCORES.js [app-client] (ecmascript)");
const ZRANGE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZRANGE.js [app-client] (ecmascript)");
const ZRANGEBYLEX = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZRANGEBYLEX.js [app-client] (ecmascript)");
const ZRANGEBYSCORE_WITHSCORES = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZRANGEBYSCORE_WITHSCORES.js [app-client] (ecmascript)");
const ZRANGEBYSCORE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZRANGEBYSCORE.js [app-client] (ecmascript)");
const ZRANGESTORE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZRANGESTORE.js [app-client] (ecmascript)");
const ZRANK = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZRANK.js [app-client] (ecmascript)");
const ZREM = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZREM.js [app-client] (ecmascript)");
const ZREMRANGEBYLEX = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZREMRANGEBYLEX.js [app-client] (ecmascript)");
const ZREMRANGEBYRANK = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZREMRANGEBYRANK.js [app-client] (ecmascript)");
const ZREMRANGEBYSCORE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZREMRANGEBYSCORE.js [app-client] (ecmascript)");
const ZREVRANK = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZREVRANK.js [app-client] (ecmascript)");
const ZSCAN = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZSCAN.js [app-client] (ecmascript)");
const ZSCORE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZSCORE.js [app-client] (ecmascript)");
const ZUNION_WITHSCORES = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZUNION_WITHSCORES.js [app-client] (ecmascript)");
const ZUNION = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZUNION.js [app-client] (ecmascript)");
const ZUNIONSTORE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ZUNIONSTORE.js [app-client] (ecmascript)");
exports.default = {
    APPEND,
    append: APPEND,
    BITCOUNT,
    bitCount: BITCOUNT,
    BITFIELD_RO,
    bitFieldRo: BITFIELD_RO,
    BITFIELD,
    bitField: BITFIELD,
    BITOP,
    bitOp: BITOP,
    BITPOS,
    bitPos: BITPOS,
    BLMOVE,
    blMove: BLMOVE,
    BLMPOP,
    blmPop: BLMPOP,
    BLPOP,
    blPop: BLPOP,
    BRPOP,
    brPop: BRPOP,
    BRPOPLPUSH,
    brPopLPush: BRPOPLPUSH,
    BZMPOP,
    bzmPop: BZMPOP,
    BZPOPMAX,
    bzPopMax: BZPOPMAX,
    BZPOPMIN,
    bzPopMin: BZPOPMIN,
    COPY,
    copy: COPY,
    DECR,
    decr: DECR,
    DECRBY,
    decrBy: DECRBY,
    DEL,
    del: DEL,
    DUMP,
    dump: DUMP,
    EVAL_RO,
    evalRo: EVAL_RO,
    EVAL,
    eval: EVAL,
    EVALSHA,
    evalSha: EVALSHA,
    EVALSHA_RO,
    evalShaRo: EVALSHA_RO,
    EXISTS,
    exists: EXISTS,
    EXPIRE,
    expire: EXPIRE,
    EXPIREAT,
    expireAt: EXPIREAT,
    EXPIRETIME,
    expireTime: EXPIRETIME,
    FCALL_RO,
    fCallRo: FCALL_RO,
    FCALL,
    fCall: FCALL,
    GEOADD,
    geoAdd: GEOADD,
    GEODIST,
    geoDist: GEODIST,
    GEOHASH,
    geoHash: GEOHASH,
    GEOPOS,
    geoPos: GEOPOS,
    GEORADIUS_RO_WITH,
    geoRadiusRoWith: GEORADIUS_RO_WITH,
    GEORADIUS_RO,
    geoRadiusRo: GEORADIUS_RO,
    GEORADIUS_WITH,
    geoRadiusWith: GEORADIUS_WITH,
    GEORADIUS,
    geoRadius: GEORADIUS,
    GEORADIUSBYMEMBER_RO_WITH,
    geoRadiusByMemberRoWith: GEORADIUSBYMEMBER_RO_WITH,
    GEORADIUSBYMEMBER_RO,
    geoRadiusByMemberRo: GEORADIUSBYMEMBER_RO,
    GEORADIUSBYMEMBER_WITH,
    geoRadiusByMemberWith: GEORADIUSBYMEMBER_WITH,
    GEORADIUSBYMEMBER,
    geoRadiusByMember: GEORADIUSBYMEMBER,
    GEORADIUSBYMEMBERSTORE,
    geoRadiusByMemberStore: GEORADIUSBYMEMBERSTORE,
    GEORADIUSSTORE,
    geoRadiusStore: GEORADIUSSTORE,
    GEOSEARCH_WITH,
    geoSearchWith: GEOSEARCH_WITH,
    GEOSEARCH,
    geoSearch: GEOSEARCH,
    GEOSEARCHSTORE,
    geoSearchStore: GEOSEARCHSTORE,
    GET,
    get: GET,
    GETBIT,
    getBit: GETBIT,
    GETDEL,
    getDel: GETDEL,
    GETEX,
    getEx: GETEX,
    GETRANGE,
    getRange: GETRANGE,
    GETSET,
    getSet: GETSET,
    HDEL,
    hDel: HDEL,
    HEXISTS,
    hExists: HEXISTS,
    HEXPIRE,
    hExpire: HEXPIRE,
    HEXPIREAT,
    hExpireAt: HEXPIREAT,
    HEXPIRETIME,
    hExpireTime: HEXPIRETIME,
    HGET,
    hGet: HGET,
    HGETALL,
    hGetAll: HGETALL,
    HINCRBY,
    hIncrBy: HINCRBY,
    HINCRBYFLOAT,
    hIncrByFloat: HINCRBYFLOAT,
    HKEYS,
    hKeys: HKEYS,
    HLEN,
    hLen: HLEN,
    HMGET,
    hmGet: HMGET,
    HPERSIST,
    hPersist: HPERSIST,
    HPEXPIRE,
    hpExpire: HPEXPIRE,
    HPEXPIREAT,
    hpExpireAt: HPEXPIREAT,
    HPEXPIRETIME,
    hpExpireTime: HPEXPIRETIME,
    HPTTL,
    hpTTL: HPTTL,
    HRANDFIELD_COUNT_WITHVALUES,
    hRandFieldCountWithValues: HRANDFIELD_COUNT_WITHVALUES,
    HRANDFIELD_COUNT,
    hRandFieldCount: HRANDFIELD_COUNT,
    HRANDFIELD,
    hRandField: HRANDFIELD,
    HSCAN,
    hScan: HSCAN,
    HSCAN_NOVALUES,
    hScanNoValues: HSCAN_NOVALUES,
    HSET,
    hSet: HSET,
    HSETNX,
    hSetNX: HSETNX,
    HSTRLEN,
    hStrLen: HSTRLEN,
    HTTL,
    hTTL: HTTL,
    HVALS,
    hVals: HVALS,
    INCR,
    incr: INCR,
    INCRBY,
    incrBy: INCRBY,
    INCRBYFLOAT,
    incrByFloat: INCRBYFLOAT,
    LCS_IDX_WITHMATCHLEN,
    lcsIdxWithMatchLen: LCS_IDX_WITHMATCHLEN,
    LCS_IDX,
    lcsIdx: LCS_IDX,
    LCS_LEN,
    lcsLen: LCS_LEN,
    LCS,
    lcs: LCS,
    LINDEX,
    lIndex: LINDEX,
    LINSERT,
    lInsert: LINSERT,
    LLEN,
    lLen: LLEN,
    LMOVE,
    lMove: LMOVE,
    LMPOP,
    lmPop: LMPOP,
    LPOP_COUNT,
    lPopCount: LPOP_COUNT,
    LPOP,
    lPop: LPOP,
    LPOS_COUNT,
    lPosCount: LPOS_COUNT,
    LPOS,
    lPos: LPOS,
    LPUSH,
    lPush: LPUSH,
    LPUSHX,
    lPushX: LPUSHX,
    LRANGE,
    lRange: LRANGE,
    LREM,
    lRem: LREM,
    LSET,
    lSet: LSET,
    LTRIM,
    lTrim: LTRIM,
    MGET,
    mGet: MGET,
    MIGRATE,
    migrate: MIGRATE,
    MSET,
    mSet: MSET,
    MSETNX,
    mSetNX: MSETNX,
    OBJECT_ENCODING,
    objectEncoding: OBJECT_ENCODING,
    OBJECT_FREQ,
    objectFreq: OBJECT_FREQ,
    OBJECT_IDLETIME,
    objectIdleTime: OBJECT_IDLETIME,
    OBJECT_REFCOUNT,
    objectRefCount: OBJECT_REFCOUNT,
    PERSIST,
    persist: PERSIST,
    PEXPIRE,
    pExpire: PEXPIRE,
    PEXPIREAT,
    pExpireAt: PEXPIREAT,
    PEXPIRETIME,
    pExpireTime: PEXPIRETIME,
    PFADD,
    pfAdd: PFADD,
    PFCOUNT,
    pfCount: PFCOUNT,
    PFMERGE,
    pfMerge: PFMERGE,
    PSETEX,
    pSetEx: PSETEX,
    PTTL,
    pTTL: PTTL,
    PUBLISH,
    publish: PUBLISH,
    RENAME,
    rename: RENAME,
    RENAMENX,
    renameNX: RENAMENX,
    RESTORE,
    restore: RESTORE,
    RPOP_COUNT,
    rPopCount: RPOP_COUNT,
    RPOP,
    rPop: RPOP,
    RPOPLPUSH,
    rPopLPush: RPOPLPUSH,
    RPUSH,
    rPush: RPUSH,
    RPUSHX,
    rPushX: RPUSHX,
    SADD,
    sAdd: SADD,
    SCARD,
    sCard: SCARD,
    SDIFF,
    sDiff: SDIFF,
    SDIFFSTORE,
    sDiffStore: SDIFFSTORE,
    SINTER,
    sInter: SINTER,
    SINTERCARD,
    sInterCard: SINTERCARD,
    SINTERSTORE,
    sInterStore: SINTERSTORE,
    SET,
    set: SET,
    SETBIT,
    setBit: SETBIT,
    SETEX,
    setEx: SETEX,
    SETNX,
    setNX: SETNX,
    SETRANGE,
    setRange: SETRANGE,
    SISMEMBER,
    sIsMember: SISMEMBER,
    SMEMBERS,
    sMembers: SMEMBERS,
    SMISMEMBER,
    smIsMember: SMISMEMBER,
    SMOVE,
    sMove: SMOVE,
    SORT_RO,
    sortRo: SORT_RO,
    SORT_STORE,
    sortStore: SORT_STORE,
    SORT,
    sort: SORT,
    SPOP,
    sPop: SPOP,
    SPUBLISH,
    sPublish: SPUBLISH,
    SRANDMEMBER_COUNT,
    sRandMemberCount: SRANDMEMBER_COUNT,
    SRANDMEMBER,
    sRandMember: SRANDMEMBER,
    SREM,
    sRem: SREM,
    SSCAN,
    sScan: SSCAN,
    STRLEN,
    strLen: STRLEN,
    SUNION,
    sUnion: SUNION,
    SUNIONSTORE,
    sUnionStore: SUNIONSTORE,
    TOUCH,
    touch: TOUCH,
    TTL,
    ttl: TTL,
    TYPE,
    type: TYPE,
    UNLINK,
    unlink: UNLINK,
    WATCH,
    watch: WATCH,
    XACK,
    xAck: XACK,
    XADD,
    xAdd: XADD,
    XAUTOCLAIM_JUSTID,
    xAutoClaimJustId: XAUTOCLAIM_JUSTID,
    XAUTOCLAIM,
    xAutoClaim: XAUTOCLAIM,
    XCLAIM,
    xClaim: XCLAIM,
    XCLAIM_JUSTID,
    xClaimJustId: XCLAIM_JUSTID,
    XDEL,
    xDel: XDEL,
    XGROUP_CREATE,
    xGroupCreate: XGROUP_CREATE,
    XGROUP_CREATECONSUMER,
    xGroupCreateConsumer: XGROUP_CREATECONSUMER,
    XGROUP_DELCONSUMER,
    xGroupDelConsumer: XGROUP_DELCONSUMER,
    XGROUP_DESTROY,
    xGroupDestroy: XGROUP_DESTROY,
    XGROUP_SETID,
    xGroupSetId: XGROUP_SETID,
    XINFO_CONSUMERS,
    xInfoConsumers: XINFO_CONSUMERS,
    XINFO_GROUPS,
    xInfoGroups: XINFO_GROUPS,
    XINFO_STREAM,
    xInfoStream: XINFO_STREAM,
    XLEN,
    xLen: XLEN,
    XPENDING_RANGE,
    xPendingRange: XPENDING_RANGE,
    XPENDING,
    xPending: XPENDING,
    XRANGE,
    xRange: XRANGE,
    XREAD,
    xRead: XREAD,
    XREADGROUP,
    xReadGroup: XREADGROUP,
    XREVRANGE,
    xRevRange: XREVRANGE,
    XSETID,
    xSetId: XSETID,
    XTRIM,
    xTrim: XTRIM,
    ZADD,
    zAdd: ZADD,
    ZCARD,
    zCard: ZCARD,
    ZCOUNT,
    zCount: ZCOUNT,
    ZDIFF_WITHSCORES,
    zDiffWithScores: ZDIFF_WITHSCORES,
    ZDIFF,
    zDiff: ZDIFF,
    ZDIFFSTORE,
    zDiffStore: ZDIFFSTORE,
    ZINCRBY,
    zIncrBy: ZINCRBY,
    ZINTER_WITHSCORES,
    zInterWithScores: ZINTER_WITHSCORES,
    ZINTER,
    zInter: ZINTER,
    ZINTERCARD,
    zInterCard: ZINTERCARD,
    ZINTERSTORE,
    zInterStore: ZINTERSTORE,
    ZLEXCOUNT,
    zLexCount: ZLEXCOUNT,
    ZMPOP,
    zmPop: ZMPOP,
    ZMSCORE,
    zmScore: ZMSCORE,
    ZPOPMAX_COUNT,
    zPopMaxCount: ZPOPMAX_COUNT,
    ZPOPMAX,
    zPopMax: ZPOPMAX,
    ZPOPMIN_COUNT,
    zPopMinCount: ZPOPMIN_COUNT,
    ZPOPMIN,
    zPopMin: ZPOPMIN,
    ZRANDMEMBER_COUNT_WITHSCORES,
    zRandMemberCountWithScores: ZRANDMEMBER_COUNT_WITHSCORES,
    ZRANDMEMBER_COUNT,
    zRandMemberCount: ZRANDMEMBER_COUNT,
    ZRANDMEMBER,
    zRandMember: ZRANDMEMBER,
    ZRANGE_WITHSCORES,
    zRangeWithScores: ZRANGE_WITHSCORES,
    ZRANGE,
    zRange: ZRANGE,
    ZRANGEBYLEX,
    zRangeByLex: ZRANGEBYLEX,
    ZRANGEBYSCORE_WITHSCORES,
    zRangeByScoreWithScores: ZRANGEBYSCORE_WITHSCORES,
    ZRANGEBYSCORE,
    zRangeByScore: ZRANGEBYSCORE,
    ZRANGESTORE,
    zRangeStore: ZRANGESTORE,
    ZRANK,
    zRank: ZRANK,
    ZREM,
    zRem: ZREM,
    ZREMRANGEBYLEX,
    zRemRangeByLex: ZREMRANGEBYLEX,
    ZREMRANGEBYRANK,
    zRemRangeByRank: ZREMRANGEBYRANK,
    ZREMRANGEBYSCORE,
    zRemRangeByScore: ZREMRANGEBYSCORE,
    ZREVRANK,
    zRevRank: ZREVRANK,
    ZSCAN,
    zScan: ZSCAN,
    ZSCORE,
    zScore: ZSCORE,
    ZUNION_WITHSCORES,
    zUnionWithScores: ZUNION_WITHSCORES,
    ZUNION,
    zUnion: ZUNION,
    ZUNIONSTORE,
    zUnionStore: ZUNIONSTORE
};
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ACL_CAT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(categoryName) {
    const args = [
        'ACL',
        'CAT'
    ];
    if (categoryName) {
        args.push(categoryName);
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ACL_DELUSER.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
function transformArguments(username) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'ACL',
        'DELUSER'
    ], username);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ACL_DRYRUN.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = void 0;
exports.IS_READ_ONLY = true;
function transformArguments(username, command) {
    return [
        'ACL',
        'DRYRUN',
        username,
        ...command
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ACL_GENPASS.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(bits) {
    const args = [
        'ACL',
        'GENPASS'
    ];
    if (bits) {
        args.push(bits.toString());
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ACL_GETUSER.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = void 0;
function transformArguments(username) {
    return [
        'ACL',
        'GETUSER',
        username
    ];
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    return {
        flags: reply[1],
        passwords: reply[3],
        commands: reply[5],
        keys: reply[7],
        channels: reply[9],
        selectors: reply[11]
    };
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ACL_LIST.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'ACL',
        'LIST'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ACL_LOAD.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'ACL',
        'LOAD'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ACL_LOG_RESET.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'ACL',
        'LOG',
        'RESET'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ACL_LOG.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = void 0;
function transformArguments(count) {
    const args = [
        'ACL',
        'LOG'
    ];
    if (count) {
        args.push(count.toString());
    }
    return args;
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    return reply.map((log)=>({
            count: log[1],
            reason: log[3],
            context: log[5],
            object: log[7],
            username: log[9],
            ageSeconds: Number(log[11]),
            clientInfo: log[13]
        }));
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ACL_SAVE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'ACL',
        'SAVE'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ACL_SETUSER.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
function transformArguments(username, rule) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'ACL',
        'SETUSER',
        username
    ], rule);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ACL_USERS.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'ACL',
        'USERS'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ACL_WHOAMI.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'ACL',
        'WHOAMI'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ASKING.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'ASKING'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/AUTH.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(param) {
    let { username, password } = param;
    if (!username) {
        return [
            'AUTH',
            password
        ];
    }
    return [
        'AUTH',
        username,
        password
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BGREWRITEAOF.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'BGREWRITEAOF'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BGSAVE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(options) {
    const args = [
        'BGSAVE'
    ];
    if (options === null || options === void 0 ? void 0 : options.SCHEDULE) {
        args.push('SCHEDULE');
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLIENT_CACHING.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(value) {
    return [
        'CLIENT',
        'CACHING',
        value ? 'YES' : 'NO'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLIENT_GETNAME.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'CLIENT',
        'GETNAME'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLIENT_GETREDIR.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'CLIENT',
        'GETREDIR'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLIENT_ID.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = void 0;
exports.IS_READ_ONLY = true;
function transformArguments() {
    return [
        'CLIENT',
        'ID'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLIENT_KILL.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.ClientKillFilters = void 0;
var ClientKillFilters;
(function(ClientKillFilters) {
    ClientKillFilters["ADDRESS"] = "ADDR";
    ClientKillFilters["LOCAL_ADDRESS"] = "LADDR";
    ClientKillFilters["ID"] = "ID";
    ClientKillFilters["TYPE"] = "TYPE";
    ClientKillFilters["USER"] = "USER";
    ClientKillFilters["SKIP_ME"] = "SKIPME";
    ClientKillFilters["MAXAGE"] = "MAXAGE";
})(ClientKillFilters || (exports.ClientKillFilters = ClientKillFilters = {}));
function transformArguments(filters) {
    const args = [
        'CLIENT',
        'KILL'
    ];
    if (Array.isArray(filters)) {
        for (const filter of filters){
            pushFilter(args, filter);
        }
    } else {
        pushFilter(args, filters);
    }
    return args;
}
exports.transformArguments = transformArguments;
function pushFilter(args, filter) {
    if (filter === ClientKillFilters.SKIP_ME) {
        args.push('SKIPME');
        return;
    }
    args.push(filter.filter);
    switch(filter.filter){
        case ClientKillFilters.ADDRESS:
            args.push(filter.address);
            break;
        case ClientKillFilters.LOCAL_ADDRESS:
            args.push(filter.localAddress);
            break;
        case ClientKillFilters.ID:
            args.push(typeof filter.id === 'number' ? filter.id.toString() : filter.id);
            break;
        case ClientKillFilters.TYPE:
            args.push(filter.type);
            break;
        case ClientKillFilters.USER:
            args.push(filter.username);
            break;
        case ClientKillFilters.SKIP_ME:
            args.push(filter.skipMe ? 'yes' : 'no');
            break;
        case ClientKillFilters.MAXAGE:
            args.push(filter.maxAge.toString());
            break;
    }
}
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLIENT_INFO.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
exports.IS_READ_ONLY = true;
function transformArguments() {
    return [
        'CLIENT',
        'INFO'
    ];
}
exports.transformArguments = transformArguments;
const CLIENT_INFO_REGEX = /([^\s=]+)=([^\s]*)/g;
function transformReply(rawReply) {
    const map = {};
    for (const item of rawReply.matchAll(CLIENT_INFO_REGEX)){
        map[item[1]] = item[2];
    }
    const reply = {
        id: Number(map.id),
        addr: map.addr,
        fd: Number(map.fd),
        name: map.name,
        age: Number(map.age),
        idle: Number(map.idle),
        flags: map.flags,
        db: Number(map.db),
        sub: Number(map.sub),
        psub: Number(map.psub),
        multi: Number(map.multi),
        qbuf: Number(map.qbuf),
        qbufFree: Number(map['qbuf-free']),
        argvMem: Number(map['argv-mem']),
        obl: Number(map.obl),
        oll: Number(map.oll),
        omem: Number(map.omem),
        totMem: Number(map['tot-mem']),
        events: map.events,
        cmd: map.cmd,
        user: map.user,
        libName: map['lib-name'],
        libVer: map['lib-ver']
    };
    if (map.laddr !== undefined) {
        reply.laddr = map.laddr;
    }
    if (map.redir !== undefined) {
        reply.redir = Number(map.redir);
    }
    if (map.ssub !== undefined) {
        reply.ssub = Number(map.ssub);
    }
    if (map['multi-mem'] !== undefined) {
        reply.multiMem = Number(map['multi-mem']);
    }
    if (map.resp !== undefined) {
        reply.resp = Number(map.resp);
    }
    return reply;
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLIENT_LIST.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
const CLIENT_INFO_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLIENT_INFO.js [app-client] (ecmascript)");
exports.IS_READ_ONLY = true;
function transformArguments(filter) {
    let args = [
        'CLIENT',
        'LIST'
    ];
    if (filter) {
        if (filter.TYPE !== undefined) {
            args.push('TYPE', filter.TYPE);
        } else {
            args.push('ID');
            args = (0, generic_transformers_1.pushVerdictArguments)(args, filter.ID);
        }
    }
    return args;
}
exports.transformArguments = transformArguments;
function transformReply(rawReply) {
    const split = rawReply.split('\n'), length = split.length - 1, reply = [];
    for(let i = 0; i < length; i++){
        reply.push((0, CLIENT_INFO_1.transformReply)(split[i]));
    }
    return reply;
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLIENT_NO-EVICT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(value) {
    return [
        'CLIENT',
        'NO-EVICT',
        value ? 'ON' : 'OFF'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLIENT_NO-TOUCH.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(value) {
    return [
        'CLIENT',
        'NO-TOUCH',
        value ? 'ON' : 'OFF'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLIENT_PAUSE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(timeout, mode) {
    const args = [
        'CLIENT',
        'PAUSE',
        timeout.toString()
    ];
    if (mode) {
        args.push(mode);
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLIENT_SETNAME.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(name) {
    return [
        'CLIENT',
        'SETNAME',
        name
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLIENT_TRACKING.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(mode, options) {
    const args = [
        'CLIENT',
        'TRACKING',
        mode ? 'ON' : 'OFF'
    ];
    if (mode) {
        if (options === null || options === void 0 ? void 0 : options.REDIRECT) {
            args.push('REDIRECT', options.REDIRECT.toString());
        }
        if (isBroadcast(options)) {
            args.push('BCAST');
            if (options === null || options === void 0 ? void 0 : options.PREFIX) {
                if (Array.isArray(options.PREFIX)) {
                    for (const prefix of options.PREFIX){
                        args.push('PREFIX', prefix);
                    }
                } else {
                    args.push('PREFIX', options.PREFIX);
                }
            }
        } else if (isOptIn(options)) {
            args.push('OPTIN');
        } else if (isOptOut(options)) {
            args.push('OPTOUT');
        }
        if (options === null || options === void 0 ? void 0 : options.NOLOOP) {
            args.push('NOLOOP');
        }
    }
    return args;
}
exports.transformArguments = transformArguments;
function isBroadcast(options) {
    return (options === null || options === void 0 ? void 0 : options.BCAST) === true;
}
function isOptIn(options) {
    return (options === null || options === void 0 ? void 0 : options.OPTIN) === true;
}
function isOptOut(options) {
    return (options === null || options === void 0 ? void 0 : options.OPTOUT) === true;
}
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLIENT_TRACKINGINFO.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = void 0;
function transformArguments() {
    return [
        'CLIENT',
        'TRACKINGINFO'
    ];
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    return {
        flags: new Set(reply[1]),
        redirect: reply[3],
        prefixes: reply[5]
    };
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLIENT_UNPAUSE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'CLIENT',
        'UNPAUSE'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_ADDSLOTS.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
function transformArguments(slots) {
    return (0, generic_transformers_1.pushVerdictNumberArguments)([
        'CLUSTER',
        'ADDSLOTS'
    ], slots);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_ADDSLOTSRANGE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
function transformArguments(ranges) {
    return (0, generic_transformers_1.pushSlotRangesArguments)([
        'CLUSTER',
        'ADDSLOTSRANGE'
    ], ranges);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_BUMPEPOCH.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'CLUSTER',
        'BUMPEPOCH'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_COUNT-FAILURE-REPORTS.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(nodeId) {
    return [
        'CLUSTER',
        'COUNT-FAILURE-REPORTS',
        nodeId
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_COUNTKEYSINSLOT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(slot) {
    return [
        'CLUSTER',
        'COUNTKEYSINSLOT',
        slot.toString()
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_DELSLOTS.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
function transformArguments(slots) {
    return (0, generic_transformers_1.pushVerdictNumberArguments)([
        'CLUSTER',
        'DELSLOTS'
    ], slots);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_DELSLOTSRANGE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
function transformArguments(ranges) {
    return (0, generic_transformers_1.pushSlotRangesArguments)([
        'CLUSTER',
        'DELSLOTSRANGE'
    ], ranges);
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_FAILOVER.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FailoverModes = void 0;
var FailoverModes;
(function(FailoverModes) {
    FailoverModes["FORCE"] = "FORCE";
    FailoverModes["TAKEOVER"] = "TAKEOVER";
})(FailoverModes || (exports.FailoverModes = FailoverModes = {}));
function transformArguments(mode) {
    const args = [
        'CLUSTER',
        'FAILOVER'
    ];
    if (mode) {
        args.push(mode);
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_FLUSHSLOTS.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'CLUSTER',
        'FLUSHSLOTS'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_FORGET.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(nodeId) {
    return [
        'CLUSTER',
        'FORGET',
        nodeId
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_GETKEYSINSLOT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(slot, count) {
    return [
        'CLUSTER',
        'GETKEYSINSLOT',
        slot.toString(),
        count.toString()
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_INFO.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.extractLineValue = exports.transformReply = exports.transformArguments = void 0;
function transformArguments() {
    return [
        'CLUSTER',
        'INFO'
    ];
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    const lines = reply.split('\r\n');
    return {
        state: extractLineValue(lines[0]),
        slots: {
            assigned: Number(extractLineValue(lines[1])),
            ok: Number(extractLineValue(lines[2])),
            pfail: Number(extractLineValue(lines[3])),
            fail: Number(extractLineValue(lines[4]))
        },
        knownNodes: Number(extractLineValue(lines[5])),
        size: Number(extractLineValue(lines[6])),
        currentEpoch: Number(extractLineValue(lines[7])),
        myEpoch: Number(extractLineValue(lines[8])),
        stats: {
            messagesSent: Number(extractLineValue(lines[9])),
            messagesReceived: Number(extractLineValue(lines[10]))
        }
    };
}
exports.transformReply = transformReply;
function extractLineValue(line) {
    return line.substring(line.indexOf(':') + 1);
}
exports.extractLineValue = extractLineValue;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_KEYSLOT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(key) {
    return [
        'CLUSTER',
        'KEYSLOT',
        key
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_LINKS.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = void 0;
function transformArguments() {
    return [
        'CLUSTER',
        'LINKS'
    ];
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    return reply.map((peerLink)=>({
            direction: peerLink[1],
            node: peerLink[3],
            createTime: Number(peerLink[5]),
            events: peerLink[7],
            sendBufferAllocated: Number(peerLink[9]),
            sendBufferUsed: Number(peerLink[11])
        }));
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_MEET.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(ip, port) {
    return [
        'CLUSTER',
        'MEET',
        ip,
        port.toString()
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_MYID.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'CLUSTER',
        'MYID'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_MYSHARDID.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = void 0;
exports.IS_READ_ONLY = true;
function transformArguments() {
    return [
        'CLUSTER',
        'MYSHARDID'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_NODES.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.RedisClusterNodeLinkStates = exports.transformArguments = void 0;
function transformArguments() {
    return [
        'CLUSTER',
        'NODES'
    ];
}
exports.transformArguments = transformArguments;
var RedisClusterNodeLinkStates;
(function(RedisClusterNodeLinkStates) {
    RedisClusterNodeLinkStates["CONNECTED"] = "connected";
    RedisClusterNodeLinkStates["DISCONNECTED"] = "disconnected";
})(RedisClusterNodeLinkStates || (exports.RedisClusterNodeLinkStates = RedisClusterNodeLinkStates = {}));
function transformReply(reply) {
    const lines = reply.split('\n');
    lines.pop(); // last line is empty
    const mastersMap = new Map(), replicasMap = new Map();
    for (const line of lines){
        const [id, address, flags, masterId, pingSent, pongRecv, configEpoch, linkState, ...slots] = line.split(' '), node = {
            id,
            address,
            ...transformNodeAddress(address),
            flags: flags.split(','),
            pingSent: Number(pingSent),
            pongRecv: Number(pongRecv),
            configEpoch: Number(configEpoch),
            linkState: linkState
        };
        if (masterId === '-') {
            let replicas = replicasMap.get(id);
            if (!replicas) {
                replicas = [];
                replicasMap.set(id, replicas);
            }
            mastersMap.set(id, {
                ...node,
                slots: slots.map((slot)=>{
                    // TODO: importing & exporting (https://redis.io/commands/cluster-nodes#special-slot-entries)
                    const [fromString, toString] = slot.split('-', 2), from = Number(fromString);
                    return {
                        from,
                        to: toString ? Number(toString) : from
                    };
                }),
                replicas
            });
        } else {
            const replicas = replicasMap.get(masterId);
            if (!replicas) {
                replicasMap.set(masterId, [
                    node
                ]);
            } else {
                replicas.push(node);
            }
        }
    }
    return [
        ...mastersMap.values()
    ];
}
exports.transformReply = transformReply;
function transformNodeAddress(address) {
    const indexOfColon = address.lastIndexOf(':'), indexOfAt = address.indexOf('@', indexOfColon), host = address.substring(0, indexOfColon);
    if (indexOfAt === -1) {
        return {
            host,
            port: Number(address.substring(indexOfColon + 1)),
            cport: null
        };
    }
    return {
        host: address.substring(0, indexOfColon),
        port: Number(address.substring(indexOfColon + 1, indexOfAt)),
        cport: Number(address.substring(indexOfAt + 1))
    };
}
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_REPLICAS.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = void 0;
function transformArguments(nodeId) {
    return [
        'CLUSTER',
        'REPLICAS',
        nodeId
    ];
}
exports.transformArguments = transformArguments;
var CLUSTER_NODES_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_NODES.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return CLUSTER_NODES_1.transformReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_REPLICATE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(nodeId) {
    return [
        'CLUSTER',
        'REPLICATE',
        nodeId
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_RESET.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(mode) {
    const args = [
        'CLUSTER',
        'RESET'
    ];
    if (mode) {
        args.push(mode);
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_SAVECONFIG.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'CLUSTER',
        'SAVECONFIG'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_SET-CONFIG-EPOCH.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(configEpoch) {
    return [
        'CLUSTER',
        'SET-CONFIG-EPOCH',
        configEpoch.toString()
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_SETSLOT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.ClusterSlotStates = void 0;
var ClusterSlotStates;
(function(ClusterSlotStates) {
    ClusterSlotStates["IMPORTING"] = "IMPORTING";
    ClusterSlotStates["MIGRATING"] = "MIGRATING";
    ClusterSlotStates["STABLE"] = "STABLE";
    ClusterSlotStates["NODE"] = "NODE";
})(ClusterSlotStates || (exports.ClusterSlotStates = ClusterSlotStates = {}));
function transformArguments(slot, state, nodeId) {
    const args = [
        'CLUSTER',
        'SETSLOT',
        slot.toString(),
        state
    ];
    if (nodeId) {
        args.push(nodeId);
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_SLOTS.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = void 0;
function transformArguments() {
    return [
        'CLUSTER',
        'SLOTS'
    ];
}
exports.transformArguments = transformArguments;
;
function transformReply(reply) {
    return reply.map((param)=>{
        let [from, to, master, ...replicas] = param;
        return {
            from,
            to,
            master: transformNode(master),
            replicas: replicas.map(transformNode)
        };
    });
}
exports.transformReply = transformReply;
function transformNode(param) {
    let [ip, port, id] = param;
    return {
        ip,
        port,
        id
    };
}
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/COMMAND_COUNT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = void 0;
exports.IS_READ_ONLY = true;
function transformArguments() {
    return [
        'COMMAND',
        'COUNT'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/COMMAND_GETKEYS.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = void 0;
exports.IS_READ_ONLY = true;
function transformArguments(args) {
    return [
        'COMMAND',
        'GETKEYS',
        ...args
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/COMMAND_GETKEYSANDFLAGS.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
exports.IS_READ_ONLY = true;
function transformArguments(args) {
    return [
        'COMMAND',
        'GETKEYSANDFLAGS',
        ...args
    ];
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    return reply.map((param)=>{
        let [key, flags] = param;
        return {
            key,
            flags
        };
    });
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/COMMAND_INFO.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.IS_READ_ONLY = true;
function transformArguments(commands) {
    return [
        'COMMAND',
        'INFO',
        ...commands
    ];
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    return reply.map((command)=>command ? (0, generic_transformers_1.transformCommandReply)(command) : null);
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/COMMAND_LIST.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FilterBy = exports.IS_READ_ONLY = void 0;
exports.IS_READ_ONLY = true;
var FilterBy;
(function(FilterBy) {
    FilterBy["MODULE"] = "MODULE";
    FilterBy["ACLCAT"] = "ACLCAT";
    FilterBy["PATTERN"] = "PATTERN";
})(FilterBy || (exports.FilterBy = FilterBy = {}));
function transformArguments(filter) {
    const args = [
        'COMMAND',
        'LIST'
    ];
    if (filter) {
        args.push('FILTERBY', filter.filterBy, filter.value);
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/COMMAND.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.IS_READ_ONLY = true;
function transformArguments() {
    return [
        'COMMAND'
    ];
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    return reply.map(generic_transformers_1.transformCommandReply);
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CONFIG_GET.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = void 0;
function transformArguments(parameter) {
    return [
        'CONFIG',
        'GET',
        parameter
    ];
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformTuplesReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CONFIG_RESETSTAT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'CONFIG',
        'RESETSTAT'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CONFIG_REWRITE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'CONFIG',
        'REWRITE'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CONFIG_SET.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    for(var _len = arguments.length, _tmp = new Array(_len), _key = 0; _key < _len; _key++){
        _tmp[_key] = arguments[_key];
    }
    let [parameterOrConfig, value] = _tmp;
    const args = [
        'CONFIG',
        'SET'
    ];
    if (typeof parameterOrConfig === 'string') {
        args.push(parameterOrConfig, value);
    } else {
        for (const [key, value] of Object.entries(parameterOrConfig)){
            args.push(key, value);
        }
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/DBSIZE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = void 0;
exports.IS_READ_ONLY = true;
function transformArguments() {
    return [
        'DBSIZE'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/DISCARD.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'DISCARD'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ECHO.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = void 0;
exports.IS_READ_ONLY = true;
function transformArguments(message) {
    return [
        'ECHO',
        message
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/FAILOVER.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(options) {
    const args = [
        'FAILOVER'
    ];
    if (options === null || options === void 0 ? void 0 : options.TO) {
        args.push('TO', options.TO.host, options.TO.port.toString());
        if (options.TO.FORCE) {
            args.push('FORCE');
        }
    }
    if (options === null || options === void 0 ? void 0 : options.ABORT) {
        args.push('ABORT');
    }
    if (options === null || options === void 0 ? void 0 : options.TIMEOUT) {
        args.push('TIMEOUT', options.TIMEOUT.toString());
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/FLUSHALL.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.RedisFlushModes = void 0;
var RedisFlushModes;
(function(RedisFlushModes) {
    RedisFlushModes["ASYNC"] = "ASYNC";
    RedisFlushModes["SYNC"] = "SYNC";
})(RedisFlushModes || (exports.RedisFlushModes = RedisFlushModes = {}));
function transformArguments(mode) {
    const args = [
        'FLUSHALL'
    ];
    if (mode) {
        args.push(mode);
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/FLUSHDB.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(mode) {
    const args = [
        'FLUSHDB'
    ];
    if (mode) {
        args.push(mode);
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/FUNCTION_DELETE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(library) {
    return [
        'FUNCTION',
        'DELETE',
        library
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/FUNCTION_DUMP.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'FUNCTION',
        'DUMP'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/FUNCTION_FLUSH.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(mode) {
    const args = [
        'FUNCTION',
        'FLUSH'
    ];
    if (mode) {
        args.push(mode);
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/FUNCTION_KILL.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'FUNCTION',
        'KILL'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/FUNCTION_LIST.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
function transformArguments(pattern) {
    const args = [
        'FUNCTION',
        'LIST'
    ];
    if (pattern) {
        args.push(pattern);
    }
    return args;
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    return reply.map(generic_transformers_1.transformFunctionListItemReply);
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/FUNCTION_LIST_WITHCODE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = void 0;
const FUNCTION_LIST_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/FUNCTION_LIST.js [app-client] (ecmascript)");
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
function transformArguments(pattern) {
    const args = (0, FUNCTION_LIST_1.transformArguments)(pattern);
    args.push('WITHCODE');
    return args;
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    return reply.map((library)=>({
            ...(0, generic_transformers_1.transformFunctionListItemReply)(library),
            libraryCode: library[7]
        }));
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/FUNCTION_LOAD.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(code, options) {
    const args = [
        'FUNCTION',
        'LOAD'
    ];
    if (options === null || options === void 0 ? void 0 : options.REPLACE) {
        args.push('REPLACE');
    }
    args.push(code);
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/FUNCTION_RESTORE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(dump, mode) {
    const args = [
        'FUNCTION',
        'RESTORE',
        dump
    ];
    if (mode) {
        args.push(mode);
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/FUNCTION_STATS.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = void 0;
function transformArguments() {
    return [
        'FUNCTION',
        'STATS'
    ];
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    const engines = Object.create(null);
    for(let i = 0; i < reply[3].length; i++){
        engines[reply[3][i]] = {
            librariesCount: reply[3][++i][1],
            functionsCount: reply[3][i][3]
        };
    }
    return {
        runningScript: reply[1] === null ? null : {
            name: reply[1][1],
            command: reply[1][3],
            durationMs: reply[1][5]
        },
        engines
    };
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HELLO.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = void 0;
function transformArguments(options) {
    const args = [
        'HELLO'
    ];
    if (options) {
        args.push(options.protover.toString());
        if (options.auth) {
            args.push('AUTH', options.auth.username, options.auth.password);
        }
        if (options.clientName) {
            args.push('SETNAME', options.clientName);
        }
    }
    return args;
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    return {
        server: reply[1],
        version: reply[3],
        proto: reply[5],
        id: reply[7],
        mode: reply[9],
        role: reply[11],
        modules: reply[13]
    };
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/INFO.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = void 0;
exports.IS_READ_ONLY = true;
function transformArguments(section) {
    const args = [
        'INFO'
    ];
    if (section) {
        args.push(section);
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/KEYS.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(pattern) {
    return [
        'KEYS',
        pattern
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LASTSAVE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
exports.IS_READ_ONLY = true;
function transformArguments() {
    return [
        'LASTSAVE'
    ];
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    return new Date(reply);
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LATENCY_DOCTOR.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'LATENCY',
        'DOCTOR'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LATENCY_GRAPH.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(event) {
    return [
        'LATENCY',
        'GRAPH',
        event
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LATENCY_HISTORY.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(event) {
    return [
        'LATENCY',
        'HISTORY',
        event
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LATENCY_LATEST.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'LATENCY',
        'LATEST'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LOLWUT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = void 0;
exports.IS_READ_ONLY = true;
function transformArguments(version) {
    for(var _len = arguments.length, optionalArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        optionalArguments[_key - 1] = arguments[_key];
    }
    const args = [
        'LOLWUT'
    ];
    if (version) {
        args.push('VERSION', version.toString(), ...optionalArguments.map(String));
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/MEMORY_DOCTOR.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'MEMORY',
        'DOCTOR'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/MEMORY_MALLOC-STATS.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'MEMORY',
        'MALLOC-STATS'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/MEMORY_PURGE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'MEMORY',
        'PURGE'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/MEMORY_STATS.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = void 0;
function transformArguments() {
    return [
        'MEMORY',
        'STATS'
    ];
}
exports.transformArguments = transformArguments;
const FIELDS_MAPPING = {
    'peak.allocated': 'peakAllocated',
    'total.allocated': 'totalAllocated',
    'startup.allocated': 'startupAllocated',
    'replication.backlog': 'replicationBacklog',
    'clients.slaves': 'clientsReplicas',
    'clients.normal': 'clientsNormal',
    'aof.buffer': 'aofBuffer',
    'lua.caches': 'luaCaches',
    'overhead.total': 'overheadTotal',
    'keys.count': 'keysCount',
    'keys.bytes-per-key': 'keysBytesPerKey',
    'dataset.bytes': 'datasetBytes',
    'dataset.percentage': 'datasetPercentage',
    'peak.percentage': 'peakPercentage',
    'allocator.allocated': 'allocatorAllocated',
    'allocator.active': 'allocatorActive',
    'allocator.resident': 'allocatorResident',
    'allocator-fragmentation.ratio': 'allocatorFragmentationRatio',
    'allocator-fragmentation.bytes': 'allocatorFragmentationBytes',
    'allocator-rss.ratio': 'allocatorRssRatio',
    'allocator-rss.bytes': 'allocatorRssBytes',
    'rss-overhead.ratio': 'rssOverheadRatio',
    'rss-overhead.bytes': 'rssOverheadBytes',
    'fragmentation': 'fragmentation',
    'fragmentation.bytes': 'fragmentationBytes'
}, DB_FIELDS_MAPPING = {
    'overhead.hashtable.main': 'overheadHashtableMain',
    'overhead.hashtable.expires': 'overheadHashtableExpires'
};
function transformReply(rawReply) {
    const reply = {
        db: {}
    };
    for(let i = 0; i < rawReply.length; i += 2){
        const key = rawReply[i];
        if (key.startsWith('db.')) {
            const dbTuples = rawReply[i + 1], db = {};
            for(let j = 0; j < dbTuples.length; j += 2){
                db[DB_FIELDS_MAPPING[dbTuples[j]]] = dbTuples[j + 1];
            }
            reply.db[key.substring(3)] = db;
            continue;
        }
        reply[FIELDS_MAPPING[key]] = Number(rawReply[i + 1]);
    }
    return reply;
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/MEMORY_USAGE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, options) {
    const args = [
        'MEMORY',
        'USAGE',
        key
    ];
    if (options === null || options === void 0 ? void 0 : options.SAMPLES) {
        args.push('SAMPLES', options.SAMPLES.toString());
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/MODULE_LIST.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'MODULE',
        'LIST'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/MODULE_LOAD.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(path, moduleArgs) {
    const args = [
        'MODULE',
        'LOAD',
        path
    ];
    if (moduleArgs) {
        args.push(...moduleArgs);
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/MODULE_UNLOAD.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(name) {
    return [
        'MODULE',
        'UNLOAD',
        name
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/MOVE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, db) {
    return [
        'MOVE',
        key,
        db.toString()
    ];
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.transformBooleanReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PING.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(message) {
    const args = [
        'PING'
    ];
    if (message) {
        args.push(message);
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PUBSUB_CHANNELS.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = void 0;
exports.IS_READ_ONLY = true;
function transformArguments(pattern) {
    const args = [
        'PUBSUB',
        'CHANNELS'
    ];
    if (pattern) {
        args.push(pattern);
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PUBSUB_NUMPAT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = void 0;
exports.IS_READ_ONLY = true;
function transformArguments() {
    return [
        'PUBSUB',
        'NUMPAT'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PUBSUB_NUMSUB.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.IS_READ_ONLY = true;
function transformArguments(channels) {
    const args = [
        'PUBSUB',
        'NUMSUB'
    ];
    if (channels) return (0, generic_transformers_1.pushVerdictArguments)(args, channels);
    return args;
}
exports.transformArguments = transformArguments;
function transformReply(rawReply) {
    const transformedReply = Object.create(null);
    for(let i = 0; i < rawReply.length; i += 2){
        transformedReply[rawReply[i]] = rawReply[i + 1];
    }
    return transformedReply;
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PUBSUB_SHARDCHANNELS.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = void 0;
exports.IS_READ_ONLY = true;
function transformArguments(pattern) {
    const args = [
        'PUBSUB',
        'SHARDCHANNELS'
    ];
    if (pattern) args.push(pattern);
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PUBSUB_SHARDNUMSUB.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.IS_READ_ONLY = true;
function transformArguments(channels) {
    const args = [
        'PUBSUB',
        'SHARDNUMSUB'
    ];
    if (channels) return (0, generic_transformers_1.pushVerdictArguments)(args, channels);
    return args;
}
exports.transformArguments = transformArguments;
function transformReply(rawReply) {
    const transformedReply = Object.create(null);
    for(let i = 0; i < rawReply.length; i += 2){
        transformedReply[rawReply[i]] = rawReply[i + 1];
    }
    return transformedReply;
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/RANDOMKEY.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.IS_READ_ONLY = void 0;
exports.IS_READ_ONLY = true;
function transformArguments() {
    return [
        'RANDOMKEY'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/READONLY.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'READONLY'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/READWRITE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'READWRITE'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/REPLICAOF.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(host, port) {
    return [
        'REPLICAOF',
        host,
        port.toString()
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/RESTORE-ASKING.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'RESTORE-ASKING'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ROLE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
exports.IS_READ_ONLY = true;
function transformArguments() {
    return [
        'ROLE'
    ];
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    switch(reply[0]){
        case 'master':
            return {
                role: 'master',
                replicationOffest: reply[1],
                replicas: reply[2].map((param)=>{
                    let [ip, port, replicationOffest] = param;
                    return {
                        ip,
                        port: Number(port),
                        replicationOffest: Number(replicationOffest)
                    };
                })
            };
        case 'slave':
            return {
                role: 'slave',
                master: {
                    ip: reply[1],
                    port: reply[2]
                },
                state: reply[3],
                dataReceived: reply[4]
            };
        case 'sentinel':
            return {
                role: 'sentinel',
                masterNames: reply[1]
            };
    }
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SAVE.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'SAVE'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SCAN.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
exports.IS_READ_ONLY = true;
function transformArguments(cursor, options) {
    const args = (0, generic_transformers_1.pushScanArguments)([
        'SCAN'
    ], cursor, options);
    if (options === null || options === void 0 ? void 0 : options.TYPE) {
        args.push('TYPE', options.TYPE);
    }
    return args;
}
exports.transformArguments = transformArguments;
function transformReply(param) {
    let [cursor, keys] = param;
    return {
        cursor: Number(cursor),
        keys
    };
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SCRIPT_DEBUG.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(mode) {
    return [
        'SCRIPT',
        'DEBUG',
        mode
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SCRIPT_EXISTS.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = void 0;
const generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
function transformArguments(sha1) {
    return (0, generic_transformers_1.pushVerdictArguments)([
        'SCRIPT',
        'EXISTS'
    ], sha1);
}
exports.transformArguments = transformArguments;
var generic_transformers_2 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "transformReply", {
    enumerable: true,
    get: function() {
        return generic_transformers_2.transformBooleanArrayReply;
    }
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SCRIPT_FLUSH.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(mode) {
    const args = [
        'SCRIPT',
        'FLUSH'
    ];
    if (mode) {
        args.push(mode);
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SCRIPT_KILL.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'SCRIPT',
        'KILL'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SCRIPT_LOAD.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(script) {
    return [
        'SCRIPT',
        'LOAD',
        script
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SHUTDOWN.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(mode) {
    const args = [
        'SHUTDOWN'
    ];
    if (mode) {
        args.push(mode);
    }
    return args;
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SWAPDB.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments(index1, index2) {
    return [
        'SWAPDB',
        index1.toString(),
        index2.toString()
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/TIME.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformReply = exports.transformArguments = void 0;
function transformArguments() {
    return [
        'TIME'
    ];
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    const seconds = Number(reply[0]), microseconds = Number(reply[1]), d = new Date(seconds * 1000 + microseconds / 1000);
    d.microseconds = microseconds;
    return d;
}
exports.transformReply = transformReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/UNWATCH.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = void 0;
function transformArguments() {
    return [
        'UNWATCH'
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/WAIT.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(numberOfReplicas, timeout) {
    return [
        'WAIT',
        numberOfReplicas.toString(),
        timeout.toString()
    ];
}
exports.transformArguments = transformArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/client/commands.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const commands_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/cluster/commands.js [app-client] (ecmascript)");
const ACL_CAT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ACL_CAT.js [app-client] (ecmascript)");
const ACL_DELUSER = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ACL_DELUSER.js [app-client] (ecmascript)");
const ACL_DRYRUN = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ACL_DRYRUN.js [app-client] (ecmascript)");
const ACL_GENPASS = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ACL_GENPASS.js [app-client] (ecmascript)");
const ACL_GETUSER = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ACL_GETUSER.js [app-client] (ecmascript)");
const ACL_LIST = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ACL_LIST.js [app-client] (ecmascript)");
const ACL_LOAD = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ACL_LOAD.js [app-client] (ecmascript)");
const ACL_LOG_RESET = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ACL_LOG_RESET.js [app-client] (ecmascript)");
const ACL_LOG = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ACL_LOG.js [app-client] (ecmascript)");
const ACL_SAVE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ACL_SAVE.js [app-client] (ecmascript)");
const ACL_SETUSER = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ACL_SETUSER.js [app-client] (ecmascript)");
const ACL_USERS = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ACL_USERS.js [app-client] (ecmascript)");
const ACL_WHOAMI = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ACL_WHOAMI.js [app-client] (ecmascript)");
const ASKING = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ASKING.js [app-client] (ecmascript)");
const AUTH = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/AUTH.js [app-client] (ecmascript)");
const BGREWRITEAOF = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BGREWRITEAOF.js [app-client] (ecmascript)");
const BGSAVE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/BGSAVE.js [app-client] (ecmascript)");
const CLIENT_CACHING = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLIENT_CACHING.js [app-client] (ecmascript)");
const CLIENT_GETNAME = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLIENT_GETNAME.js [app-client] (ecmascript)");
const CLIENT_GETREDIR = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLIENT_GETREDIR.js [app-client] (ecmascript)");
const CLIENT_ID = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLIENT_ID.js [app-client] (ecmascript)");
const CLIENT_KILL = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLIENT_KILL.js [app-client] (ecmascript)");
const CLIENT_LIST = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLIENT_LIST.js [app-client] (ecmascript)");
const CLIENT_NO_EVICT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLIENT_NO-EVICT.js [app-client] (ecmascript)");
const CLIENT_NO_TOUCH = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLIENT_NO-TOUCH.js [app-client] (ecmascript)");
const CLIENT_PAUSE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLIENT_PAUSE.js [app-client] (ecmascript)");
const CLIENT_SETNAME = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLIENT_SETNAME.js [app-client] (ecmascript)");
const CLIENT_TRACKING = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLIENT_TRACKING.js [app-client] (ecmascript)");
const CLIENT_TRACKINGINFO = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLIENT_TRACKINGINFO.js [app-client] (ecmascript)");
const CLIENT_UNPAUSE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLIENT_UNPAUSE.js [app-client] (ecmascript)");
const CLIENT_INFO = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLIENT_INFO.js [app-client] (ecmascript)");
const CLUSTER_ADDSLOTS = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_ADDSLOTS.js [app-client] (ecmascript)");
const CLUSTER_ADDSLOTSRANGE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_ADDSLOTSRANGE.js [app-client] (ecmascript)");
const CLUSTER_BUMPEPOCH = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_BUMPEPOCH.js [app-client] (ecmascript)");
const CLUSTER_COUNT_FAILURE_REPORTS = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_COUNT-FAILURE-REPORTS.js [app-client] (ecmascript)");
const CLUSTER_COUNTKEYSINSLOT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_COUNTKEYSINSLOT.js [app-client] (ecmascript)");
const CLUSTER_DELSLOTS = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_DELSLOTS.js [app-client] (ecmascript)");
const CLUSTER_DELSLOTSRANGE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_DELSLOTSRANGE.js [app-client] (ecmascript)");
const CLUSTER_FAILOVER = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_FAILOVER.js [app-client] (ecmascript)");
const CLUSTER_FLUSHSLOTS = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_FLUSHSLOTS.js [app-client] (ecmascript)");
const CLUSTER_FORGET = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_FORGET.js [app-client] (ecmascript)");
const CLUSTER_GETKEYSINSLOT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_GETKEYSINSLOT.js [app-client] (ecmascript)");
const CLUSTER_INFO = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_INFO.js [app-client] (ecmascript)");
const CLUSTER_KEYSLOT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_KEYSLOT.js [app-client] (ecmascript)");
const CLUSTER_LINKS = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_LINKS.js [app-client] (ecmascript)");
const CLUSTER_MEET = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_MEET.js [app-client] (ecmascript)");
const CLUSTER_MYID = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_MYID.js [app-client] (ecmascript)");
const CLUSTER_MYSHARDID = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_MYSHARDID.js [app-client] (ecmascript)");
const CLUSTER_NODES = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_NODES.js [app-client] (ecmascript)");
const CLUSTER_REPLICAS = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_REPLICAS.js [app-client] (ecmascript)");
const CLUSTER_REPLICATE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_REPLICATE.js [app-client] (ecmascript)");
const CLUSTER_RESET = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_RESET.js [app-client] (ecmascript)");
const CLUSTER_SAVECONFIG = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_SAVECONFIG.js [app-client] (ecmascript)");
const CLUSTER_SET_CONFIG_EPOCH = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_SET-CONFIG-EPOCH.js [app-client] (ecmascript)");
const CLUSTER_SETSLOT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_SETSLOT.js [app-client] (ecmascript)");
const CLUSTER_SLOTS = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CLUSTER_SLOTS.js [app-client] (ecmascript)");
const COMMAND_COUNT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/COMMAND_COUNT.js [app-client] (ecmascript)");
const COMMAND_GETKEYS = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/COMMAND_GETKEYS.js [app-client] (ecmascript)");
const COMMAND_GETKEYSANDFLAGS = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/COMMAND_GETKEYSANDFLAGS.js [app-client] (ecmascript)");
const COMMAND_INFO = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/COMMAND_INFO.js [app-client] (ecmascript)");
const COMMAND_LIST = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/COMMAND_LIST.js [app-client] (ecmascript)");
const COMMAND = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/COMMAND.js [app-client] (ecmascript)");
const CONFIG_GET = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CONFIG_GET.js [app-client] (ecmascript)");
const CONFIG_RESETASTAT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CONFIG_RESETSTAT.js [app-client] (ecmascript)");
const CONFIG_REWRITE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CONFIG_REWRITE.js [app-client] (ecmascript)");
const CONFIG_SET = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/CONFIG_SET.js [app-client] (ecmascript)");
const DBSIZE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/DBSIZE.js [app-client] (ecmascript)");
const DISCARD = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/DISCARD.js [app-client] (ecmascript)");
const ECHO = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ECHO.js [app-client] (ecmascript)");
const FAILOVER = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/FAILOVER.js [app-client] (ecmascript)");
const FLUSHALL = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/FLUSHALL.js [app-client] (ecmascript)");
const FLUSHDB = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/FLUSHDB.js [app-client] (ecmascript)");
const FUNCTION_DELETE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/FUNCTION_DELETE.js [app-client] (ecmascript)");
const FUNCTION_DUMP = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/FUNCTION_DUMP.js [app-client] (ecmascript)");
const FUNCTION_FLUSH = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/FUNCTION_FLUSH.js [app-client] (ecmascript)");
const FUNCTION_KILL = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/FUNCTION_KILL.js [app-client] (ecmascript)");
const FUNCTION_LIST_WITHCODE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/FUNCTION_LIST_WITHCODE.js [app-client] (ecmascript)");
const FUNCTION_LIST = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/FUNCTION_LIST.js [app-client] (ecmascript)");
const FUNCTION_LOAD = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/FUNCTION_LOAD.js [app-client] (ecmascript)");
const FUNCTION_RESTORE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/FUNCTION_RESTORE.js [app-client] (ecmascript)");
const FUNCTION_STATS = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/FUNCTION_STATS.js [app-client] (ecmascript)");
const HELLO = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/HELLO.js [app-client] (ecmascript)");
const INFO = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/INFO.js [app-client] (ecmascript)");
const KEYS = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/KEYS.js [app-client] (ecmascript)");
const LASTSAVE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LASTSAVE.js [app-client] (ecmascript)");
const LATENCY_DOCTOR = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LATENCY_DOCTOR.js [app-client] (ecmascript)");
const LATENCY_GRAPH = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LATENCY_GRAPH.js [app-client] (ecmascript)");
const LATENCY_HISTORY = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LATENCY_HISTORY.js [app-client] (ecmascript)");
const LATENCY_LATEST = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LATENCY_LATEST.js [app-client] (ecmascript)");
const LOLWUT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/LOLWUT.js [app-client] (ecmascript)");
const MEMORY_DOCTOR = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/MEMORY_DOCTOR.js [app-client] (ecmascript)");
const MEMORY_MALLOC_STATS = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/MEMORY_MALLOC-STATS.js [app-client] (ecmascript)");
const MEMORY_PURGE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/MEMORY_PURGE.js [app-client] (ecmascript)");
const MEMORY_STATS = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/MEMORY_STATS.js [app-client] (ecmascript)");
const MEMORY_USAGE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/MEMORY_USAGE.js [app-client] (ecmascript)");
const MODULE_LIST = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/MODULE_LIST.js [app-client] (ecmascript)");
const MODULE_LOAD = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/MODULE_LOAD.js [app-client] (ecmascript)");
const MODULE_UNLOAD = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/MODULE_UNLOAD.js [app-client] (ecmascript)");
const MOVE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/MOVE.js [app-client] (ecmascript)");
const PING = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PING.js [app-client] (ecmascript)");
const PUBSUB_CHANNELS = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PUBSUB_CHANNELS.js [app-client] (ecmascript)");
const PUBSUB_NUMPAT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PUBSUB_NUMPAT.js [app-client] (ecmascript)");
const PUBSUB_NUMSUB = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PUBSUB_NUMSUB.js [app-client] (ecmascript)");
const PUBSUB_SHARDCHANNELS = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PUBSUB_SHARDCHANNELS.js [app-client] (ecmascript)");
const PUBSUB_SHARDNUMSUB = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/PUBSUB_SHARDNUMSUB.js [app-client] (ecmascript)");
const RANDOMKEY = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/RANDOMKEY.js [app-client] (ecmascript)");
const READONLY = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/READONLY.js [app-client] (ecmascript)");
const READWRITE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/READWRITE.js [app-client] (ecmascript)");
const REPLICAOF = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/REPLICAOF.js [app-client] (ecmascript)");
const RESTORE_ASKING = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/RESTORE-ASKING.js [app-client] (ecmascript)");
const ROLE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/ROLE.js [app-client] (ecmascript)");
const SAVE = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SAVE.js [app-client] (ecmascript)");
const SCAN = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SCAN.js [app-client] (ecmascript)");
const SCRIPT_DEBUG = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SCRIPT_DEBUG.js [app-client] (ecmascript)");
const SCRIPT_EXISTS = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SCRIPT_EXISTS.js [app-client] (ecmascript)");
const SCRIPT_FLUSH = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SCRIPT_FLUSH.js [app-client] (ecmascript)");
const SCRIPT_KILL = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SCRIPT_KILL.js [app-client] (ecmascript)");
const SCRIPT_LOAD = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SCRIPT_LOAD.js [app-client] (ecmascript)");
const SHUTDOWN = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SHUTDOWN.js [app-client] (ecmascript)");
const SWAPDB = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/SWAPDB.js [app-client] (ecmascript)");
const TIME = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/TIME.js [app-client] (ecmascript)");
const UNWATCH = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/UNWATCH.js [app-client] (ecmascript)");
const WAIT = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/WAIT.js [app-client] (ecmascript)");
exports.default = {
    ...commands_1.default,
    ACL_CAT,
    aclCat: ACL_CAT,
    ACL_DELUSER,
    aclDelUser: ACL_DELUSER,
    ACL_DRYRUN,
    aclDryRun: ACL_DRYRUN,
    ACL_GENPASS,
    aclGenPass: ACL_GENPASS,
    ACL_GETUSER,
    aclGetUser: ACL_GETUSER,
    ACL_LIST,
    aclList: ACL_LIST,
    ACL_LOAD,
    aclLoad: ACL_LOAD,
    ACL_LOG_RESET,
    aclLogReset: ACL_LOG_RESET,
    ACL_LOG,
    aclLog: ACL_LOG,
    ACL_SAVE,
    aclSave: ACL_SAVE,
    ACL_SETUSER,
    aclSetUser: ACL_SETUSER,
    ACL_USERS,
    aclUsers: ACL_USERS,
    ACL_WHOAMI,
    aclWhoAmI: ACL_WHOAMI,
    ASKING,
    asking: ASKING,
    AUTH,
    auth: AUTH,
    BGREWRITEAOF,
    bgRewriteAof: BGREWRITEAOF,
    BGSAVE,
    bgSave: BGSAVE,
    CLIENT_CACHING,
    clientCaching: CLIENT_CACHING,
    CLIENT_GETNAME,
    clientGetName: CLIENT_GETNAME,
    CLIENT_GETREDIR,
    clientGetRedir: CLIENT_GETREDIR,
    CLIENT_ID,
    clientId: CLIENT_ID,
    CLIENT_KILL,
    clientKill: CLIENT_KILL,
    'CLIENT_NO-EVICT': CLIENT_NO_EVICT,
    clientNoEvict: CLIENT_NO_EVICT,
    'CLIENT_NO-TOUCH': CLIENT_NO_TOUCH,
    clientNoTouch: CLIENT_NO_TOUCH,
    CLIENT_LIST,
    clientList: CLIENT_LIST,
    CLIENT_PAUSE,
    clientPause: CLIENT_PAUSE,
    CLIENT_SETNAME,
    clientSetName: CLIENT_SETNAME,
    CLIENT_TRACKING,
    clientTracking: CLIENT_TRACKING,
    CLIENT_TRACKINGINFO,
    clientTrackingInfo: CLIENT_TRACKINGINFO,
    CLIENT_UNPAUSE,
    clientUnpause: CLIENT_UNPAUSE,
    CLIENT_INFO,
    clientInfo: CLIENT_INFO,
    CLUSTER_ADDSLOTS,
    clusterAddSlots: CLUSTER_ADDSLOTS,
    CLUSTER_ADDSLOTSRANGE,
    clusterAddSlotsRange: CLUSTER_ADDSLOTSRANGE,
    CLUSTER_BUMPEPOCH,
    clusterBumpEpoch: CLUSTER_BUMPEPOCH,
    CLUSTER_COUNT_FAILURE_REPORTS,
    clusterCountFailureReports: CLUSTER_COUNT_FAILURE_REPORTS,
    CLUSTER_COUNTKEYSINSLOT,
    clusterCountKeysInSlot: CLUSTER_COUNTKEYSINSLOT,
    CLUSTER_DELSLOTS,
    clusterDelSlots: CLUSTER_DELSLOTS,
    CLUSTER_DELSLOTSRANGE,
    clusterDelSlotsRange: CLUSTER_DELSLOTSRANGE,
    CLUSTER_FAILOVER,
    clusterFailover: CLUSTER_FAILOVER,
    CLUSTER_FLUSHSLOTS,
    clusterFlushSlots: CLUSTER_FLUSHSLOTS,
    CLUSTER_FORGET,
    clusterForget: CLUSTER_FORGET,
    CLUSTER_GETKEYSINSLOT,
    clusterGetKeysInSlot: CLUSTER_GETKEYSINSLOT,
    CLUSTER_INFO,
    clusterInfo: CLUSTER_INFO,
    CLUSTER_KEYSLOT,
    clusterKeySlot: CLUSTER_KEYSLOT,
    CLUSTER_LINKS,
    clusterLinks: CLUSTER_LINKS,
    CLUSTER_MEET,
    clusterMeet: CLUSTER_MEET,
    CLUSTER_MYID,
    clusterMyId: CLUSTER_MYID,
    CLUSTER_MYSHARDID,
    clusterMyShardId: CLUSTER_MYSHARDID,
    CLUSTER_NODES,
    clusterNodes: CLUSTER_NODES,
    CLUSTER_REPLICAS,
    clusterReplicas: CLUSTER_REPLICAS,
    CLUSTER_REPLICATE,
    clusterReplicate: CLUSTER_REPLICATE,
    CLUSTER_RESET,
    clusterReset: CLUSTER_RESET,
    CLUSTER_SAVECONFIG,
    clusterSaveConfig: CLUSTER_SAVECONFIG,
    CLUSTER_SET_CONFIG_EPOCH,
    clusterSetConfigEpoch: CLUSTER_SET_CONFIG_EPOCH,
    CLUSTER_SETSLOT,
    clusterSetSlot: CLUSTER_SETSLOT,
    CLUSTER_SLOTS,
    clusterSlots: CLUSTER_SLOTS,
    COMMAND_COUNT,
    commandCount: COMMAND_COUNT,
    COMMAND_GETKEYS,
    commandGetKeys: COMMAND_GETKEYS,
    COMMAND_GETKEYSANDFLAGS,
    commandGetKeysAndFlags: COMMAND_GETKEYSANDFLAGS,
    COMMAND_INFO,
    commandInfo: COMMAND_INFO,
    COMMAND_LIST,
    commandList: COMMAND_LIST,
    COMMAND,
    command: COMMAND,
    CONFIG_GET,
    configGet: CONFIG_GET,
    CONFIG_RESETASTAT,
    configResetStat: CONFIG_RESETASTAT,
    CONFIG_REWRITE,
    configRewrite: CONFIG_REWRITE,
    CONFIG_SET,
    configSet: CONFIG_SET,
    DBSIZE,
    dbSize: DBSIZE,
    DISCARD,
    discard: DISCARD,
    ECHO,
    echo: ECHO,
    FAILOVER,
    failover: FAILOVER,
    FLUSHALL,
    flushAll: FLUSHALL,
    FLUSHDB,
    flushDb: FLUSHDB,
    FUNCTION_DELETE,
    functionDelete: FUNCTION_DELETE,
    FUNCTION_DUMP,
    functionDump: FUNCTION_DUMP,
    FUNCTION_FLUSH,
    functionFlush: FUNCTION_FLUSH,
    FUNCTION_KILL,
    functionKill: FUNCTION_KILL,
    FUNCTION_LIST_WITHCODE,
    functionListWithCode: FUNCTION_LIST_WITHCODE,
    FUNCTION_LIST,
    functionList: FUNCTION_LIST,
    FUNCTION_LOAD,
    functionLoad: FUNCTION_LOAD,
    FUNCTION_RESTORE,
    functionRestore: FUNCTION_RESTORE,
    FUNCTION_STATS,
    functionStats: FUNCTION_STATS,
    HELLO,
    hello: HELLO,
    INFO,
    info: INFO,
    KEYS,
    keys: KEYS,
    LASTSAVE,
    lastSave: LASTSAVE,
    LATENCY_DOCTOR,
    latencyDoctor: LATENCY_DOCTOR,
    LATENCY_GRAPH,
    latencyGraph: LATENCY_GRAPH,
    LATENCY_HISTORY,
    latencyHistory: LATENCY_HISTORY,
    LATENCY_LATEST,
    latencyLatest: LATENCY_LATEST,
    LOLWUT,
    lolwut: LOLWUT,
    MEMORY_DOCTOR,
    memoryDoctor: MEMORY_DOCTOR,
    'MEMORY_MALLOC-STATS': MEMORY_MALLOC_STATS,
    memoryMallocStats: MEMORY_MALLOC_STATS,
    MEMORY_PURGE,
    memoryPurge: MEMORY_PURGE,
    MEMORY_STATS,
    memoryStats: MEMORY_STATS,
    MEMORY_USAGE,
    memoryUsage: MEMORY_USAGE,
    MODULE_LIST,
    moduleList: MODULE_LIST,
    MODULE_LOAD,
    moduleLoad: MODULE_LOAD,
    MODULE_UNLOAD,
    moduleUnload: MODULE_UNLOAD,
    MOVE,
    move: MOVE,
    PING,
    ping: PING,
    PUBSUB_CHANNELS,
    pubSubChannels: PUBSUB_CHANNELS,
    PUBSUB_NUMPAT,
    pubSubNumPat: PUBSUB_NUMPAT,
    PUBSUB_NUMSUB,
    pubSubNumSub: PUBSUB_NUMSUB,
    PUBSUB_SHARDCHANNELS,
    pubSubShardChannels: PUBSUB_SHARDCHANNELS,
    PUBSUB_SHARDNUMSUB,
    pubSubShardNumSub: PUBSUB_SHARDNUMSUB,
    RANDOMKEY,
    randomKey: RANDOMKEY,
    READONLY,
    readonly: READONLY,
    READWRITE,
    readwrite: READWRITE,
    REPLICAOF,
    replicaOf: REPLICAOF,
    'RESTORE-ASKING': RESTORE_ASKING,
    restoreAsking: RESTORE_ASKING,
    ROLE,
    role: ROLE,
    SAVE,
    save: SAVE,
    SCAN,
    scan: SCAN,
    SCRIPT_DEBUG,
    scriptDebug: SCRIPT_DEBUG,
    SCRIPT_EXISTS,
    scriptExists: SCRIPT_EXISTS,
    SCRIPT_FLUSH,
    scriptFlush: SCRIPT_FLUSH,
    SCRIPT_KILL,
    scriptKill: SCRIPT_KILL,
    SCRIPT_LOAD,
    scriptLoad: SCRIPT_LOAD,
    SHUTDOWN,
    shutdown: SHUTDOWN,
    SWAPDB,
    swapDb: SWAPDB,
    TIME,
    time: TIME,
    UNWATCH,
    unwatch: UNWATCH,
    WAIT,
    wait: WAIT
};
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/errors.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MultiErrorReply = exports.ErrorReply = exports.ReconnectStrategyError = exports.RootNodesUnavailableError = exports.SocketClosedUnexpectedlyError = exports.DisconnectsClientError = exports.ClientOfflineError = exports.ClientClosedError = exports.ConnectionTimeoutError = exports.WatchError = exports.AbortError = void 0;
class AbortError extends Error {
    constructor(){
        super('The command was aborted');
    }
}
exports.AbortError = AbortError;
class WatchError extends Error {
    constructor(){
        super('One (or more) of the watched keys has been changed');
    }
}
exports.WatchError = WatchError;
class ConnectionTimeoutError extends Error {
    constructor(){
        super('Connection timeout');
    }
}
exports.ConnectionTimeoutError = ConnectionTimeoutError;
class ClientClosedError extends Error {
    constructor(){
        super('The client is closed');
    }
}
exports.ClientClosedError = ClientClosedError;
class ClientOfflineError extends Error {
    constructor(){
        super('The client is offline');
    }
}
exports.ClientOfflineError = ClientOfflineError;
class DisconnectsClientError extends Error {
    constructor(){
        super('Disconnects client');
    }
}
exports.DisconnectsClientError = DisconnectsClientError;
class SocketClosedUnexpectedlyError extends Error {
    constructor(){
        super('Socket closed unexpectedly');
    }
}
exports.SocketClosedUnexpectedlyError = SocketClosedUnexpectedlyError;
class RootNodesUnavailableError extends Error {
    constructor(){
        super('All the root nodes are unavailable');
    }
}
exports.RootNodesUnavailableError = RootNodesUnavailableError;
class ReconnectStrategyError extends Error {
    constructor(originalError, socketError){
        super(originalError.message);
        Object.defineProperty(this, "originalError", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "socketError", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.originalError = originalError;
        this.socketError = socketError;
    }
}
exports.ReconnectStrategyError = ReconnectStrategyError;
class ErrorReply extends Error {
    constructor(message){
        super(message);
        this.stack = undefined;
    }
}
exports.ErrorReply = ErrorReply;
class MultiErrorReply extends ErrorReply {
    *errors() {
        for (const index of this.errorIndexes){
            yield this.replies[index];
        }
    }
    constructor(replies, errorIndexes){
        super("".concat(errorIndexes.length, " commands failed, see .replies and .errorIndexes for more information"));
        Object.defineProperty(this, "replies", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "errorIndexes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.replies = replies;
        this.errorIndexes = errorIndexes;
    }
}
exports.MultiErrorReply = MultiErrorReply;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.promiseTimeout = void 0;
function promiseTimeout(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
exports.promiseTimeout = promiseTimeout;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/client/socket.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __classPrivateFieldGet = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _RedisSocket_instances, _a, _RedisSocket_initiateOptions, _RedisSocket_isTlsSocket, _RedisSocket_initiator, _RedisSocket_options, _RedisSocket_socket, _RedisSocket_isOpen, _RedisSocket_isReady, _RedisSocket_writableNeedDrain, _RedisSocket_isSocketUnrefed, _RedisSocket_reconnectStrategy, _RedisSocket_shouldReconnect, _RedisSocket_connect, _RedisSocket_createSocket, _RedisSocket_createNetSocket, _RedisSocket_createTlsSocket, _RedisSocket_onSocketError, _RedisSocket_disconnect, _RedisSocket_isCorked;
Object.defineProperty(exports, "__esModule", {
    value: true
});
const events_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/events/events.js [app-client] (ecmascript)");
const net = (()=>{
    const e = new Error("Cannot find module 'net'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const tls = (()=>{
    const e = new Error("Cannot find module 'tls'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const errors_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/errors.js [app-client] (ecmascript)");
const utils_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/utils.js [app-client] (ecmascript)");
class RedisSocket extends events_1.EventEmitter {
    get isOpen() {
        return __classPrivateFieldGet(this, _RedisSocket_isOpen, "f");
    }
    get isReady() {
        return __classPrivateFieldGet(this, _RedisSocket_isReady, "f");
    }
    get writableNeedDrain() {
        return __classPrivateFieldGet(this, _RedisSocket_writableNeedDrain, "f");
    }
    async connect() {
        if (__classPrivateFieldGet(this, _RedisSocket_isOpen, "f")) {
            throw new Error('Socket already opened');
        }
        __classPrivateFieldSet(this, _RedisSocket_isOpen, true, "f");
        return __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_connect).call(this);
    }
    writeCommand(args) {
        if (!__classPrivateFieldGet(this, _RedisSocket_socket, "f")) {
            throw new errors_1.ClientClosedError();
        }
        for (const toWrite of args){
            __classPrivateFieldSet(this, _RedisSocket_writableNeedDrain, !__classPrivateFieldGet(this, _RedisSocket_socket, "f").write(toWrite), "f");
        }
    }
    disconnect() {
        if (!__classPrivateFieldGet(this, _RedisSocket_isOpen, "f")) {
            throw new errors_1.ClientClosedError();
        }
        __classPrivateFieldSet(this, _RedisSocket_isOpen, false, "f");
        __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_disconnect).call(this);
    }
    async quit(fn) {
        if (!__classPrivateFieldGet(this, _RedisSocket_isOpen, "f")) {
            throw new errors_1.ClientClosedError();
        }
        __classPrivateFieldSet(this, _RedisSocket_isOpen, false, "f");
        const reply = await fn();
        __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_disconnect).call(this);
        return reply;
    }
    cork() {
        if (!__classPrivateFieldGet(this, _RedisSocket_socket, "f") || __classPrivateFieldGet(this, _RedisSocket_isCorked, "f")) {
            return;
        }
        __classPrivateFieldGet(this, _RedisSocket_socket, "f").cork();
        __classPrivateFieldSet(this, _RedisSocket_isCorked, true, "f");
        setImmediate(()=>{
            var __classPrivateFieldGet1;
            (__classPrivateFieldGet1 = __classPrivateFieldGet(this, _RedisSocket_socket, "f")) === null || __classPrivateFieldGet1 === void 0 ? void 0 : __classPrivateFieldGet1.uncork();
            __classPrivateFieldSet(this, _RedisSocket_isCorked, false, "f");
        });
    }
    ref() {
        var __classPrivateFieldGet1;
        __classPrivateFieldSet(this, _RedisSocket_isSocketUnrefed, false, "f");
        (__classPrivateFieldGet1 = __classPrivateFieldGet(this, _RedisSocket_socket, "f")) === null || __classPrivateFieldGet1 === void 0 ? void 0 : __classPrivateFieldGet1.ref();
    }
    unref() {
        var __classPrivateFieldGet1;
        __classPrivateFieldSet(this, _RedisSocket_isSocketUnrefed, true, "f");
        (__classPrivateFieldGet1 = __classPrivateFieldGet(this, _RedisSocket_socket, "f")) === null || __classPrivateFieldGet1 === void 0 ? void 0 : __classPrivateFieldGet1.unref();
    }
    constructor(initiator, options){
        super();
        _RedisSocket_instances.add(this);
        _RedisSocket_initiator.set(this, void 0);
        _RedisSocket_options.set(this, void 0);
        _RedisSocket_socket.set(this, void 0);
        _RedisSocket_isOpen.set(this, false);
        _RedisSocket_isReady.set(this, false);
        // `writable.writableNeedDrain` was added in v15.2.0 and therefore can't be used
        // https://nodejs.org/api/stream.html#stream_writable_writableneeddrain
        _RedisSocket_writableNeedDrain.set(this, false);
        _RedisSocket_isSocketUnrefed.set(this, false);
        _RedisSocket_isCorked.set(this, false);
        __classPrivateFieldSet(this, _RedisSocket_initiator, initiator, "f");
        __classPrivateFieldSet(this, _RedisSocket_options, __classPrivateFieldGet(_a, _a, "m", _RedisSocket_initiateOptions).call(_a, options), "f");
    }
}
_a = RedisSocket, _RedisSocket_initiator = new WeakMap(), _RedisSocket_options = new WeakMap(), _RedisSocket_socket = new WeakMap(), _RedisSocket_isOpen = new WeakMap(), _RedisSocket_isReady = new WeakMap(), _RedisSocket_writableNeedDrain = new WeakMap(), _RedisSocket_isSocketUnrefed = new WeakMap(), _RedisSocket_isCorked = new WeakMap(), _RedisSocket_instances = new WeakSet(), _RedisSocket_initiateOptions = function _RedisSocket_initiateOptions(options) {
    var _b, _c;
    options !== null && options !== void 0 ? options : options = {};
    if (!options.path) {
        var _port;
        (_port = (_b = options).port) !== null && _port !== void 0 ? _port : _b.port = 6379;
        var _host;
        (_host = (_c = options).host) !== null && _host !== void 0 ? _host : _c.host = 'localhost';
    }
    var _options_connectTimeout;
    (_options_connectTimeout = options.connectTimeout) !== null && _options_connectTimeout !== void 0 ? _options_connectTimeout : options.connectTimeout = 5000;
    var _options_keepAlive;
    (_options_keepAlive = options.keepAlive) !== null && _options_keepAlive !== void 0 ? _options_keepAlive : options.keepAlive = 5000;
    var _options_noDelay;
    (_options_noDelay = options.noDelay) !== null && _options_noDelay !== void 0 ? _options_noDelay : options.noDelay = true;
    return options;
}, _RedisSocket_isTlsSocket = function _RedisSocket_isTlsSocket(options) {
    return options.tls === true;
}, _RedisSocket_reconnectStrategy = function _RedisSocket_reconnectStrategy(retries, cause) {
    if (__classPrivateFieldGet(this, _RedisSocket_options, "f").reconnectStrategy === false) {
        return false;
    } else if (typeof __classPrivateFieldGet(this, _RedisSocket_options, "f").reconnectStrategy === 'number') {
        return __classPrivateFieldGet(this, _RedisSocket_options, "f").reconnectStrategy;
    } else if (__classPrivateFieldGet(this, _RedisSocket_options, "f").reconnectStrategy) {
        try {
            const retryIn = __classPrivateFieldGet(this, _RedisSocket_options, "f").reconnectStrategy(retries, cause);
            if (retryIn !== false && !(retryIn instanceof Error) && typeof retryIn !== 'number') {
                throw new TypeError("Reconnect strategy should return `false | Error | number`, got ".concat(retryIn, " instead"));
            }
            return retryIn;
        } catch (err) {
            this.emit('error', err);
        }
    }
    return Math.min(retries * 50, 500);
}, _RedisSocket_shouldReconnect = function _RedisSocket_shouldReconnect(retries, cause) {
    const retryIn = __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_reconnectStrategy).call(this, retries, cause);
    if (retryIn === false) {
        __classPrivateFieldSet(this, _RedisSocket_isOpen, false, "f");
        this.emit('error', cause);
        return cause;
    } else if (retryIn instanceof Error) {
        __classPrivateFieldSet(this, _RedisSocket_isOpen, false, "f");
        this.emit('error', cause);
        return new errors_1.ReconnectStrategyError(retryIn, cause);
    }
    return retryIn;
}, _RedisSocket_connect = async function _RedisSocket_connect() {
    let retries = 0;
    do {
        try {
            __classPrivateFieldSet(this, _RedisSocket_socket, await __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_createSocket).call(this), "f");
            __classPrivateFieldSet(this, _RedisSocket_writableNeedDrain, false, "f");
            this.emit('connect');
            try {
                await __classPrivateFieldGet(this, _RedisSocket_initiator, "f").call(this);
            } catch (err) {
                __classPrivateFieldGet(this, _RedisSocket_socket, "f").destroy();
                __classPrivateFieldSet(this, _RedisSocket_socket, undefined, "f");
                throw err;
            }
            __classPrivateFieldSet(this, _RedisSocket_isReady, true, "f");
            this.emit('ready');
        } catch (err) {
            const retryIn = __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_shouldReconnect).call(this, retries++, err);
            if (typeof retryIn !== 'number') {
                throw retryIn;
            }
            this.emit('error', err);
            await (0, utils_1.promiseTimeout)(retryIn);
            this.emit('reconnecting');
        }
    }while (__classPrivateFieldGet(this, _RedisSocket_isOpen, "f") && !__classPrivateFieldGet(this, _RedisSocket_isReady, "f"))
}, _RedisSocket_createSocket = function _RedisSocket_createSocket() {
    return new Promise((resolve, reject)=>{
        const { connectEvent, socket } = __classPrivateFieldGet(_a, _a, "m", _RedisSocket_isTlsSocket).call(_a, __classPrivateFieldGet(this, _RedisSocket_options, "f")) ? __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_createTlsSocket).call(this) : __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_createNetSocket).call(this);
        if (__classPrivateFieldGet(this, _RedisSocket_options, "f").connectTimeout) {
            socket.setTimeout(__classPrivateFieldGet(this, _RedisSocket_options, "f").connectTimeout, ()=>socket.destroy(new errors_1.ConnectionTimeoutError()));
        }
        if (__classPrivateFieldGet(this, _RedisSocket_isSocketUnrefed, "f")) {
            socket.unref();
        }
        socket.setNoDelay(__classPrivateFieldGet(this, _RedisSocket_options, "f").noDelay).once('error', reject).once(connectEvent, ()=>{
            socket.setTimeout(0)// https://github.com/nodejs/node/issues/31663
            .setKeepAlive(__classPrivateFieldGet(this, _RedisSocket_options, "f").keepAlive !== false, __classPrivateFieldGet(this, _RedisSocket_options, "f").keepAlive || 0).off('error', reject).once('error', (err)=>__classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_onSocketError).call(this, err)).once('close', (hadError)=>{
                if (!hadError && __classPrivateFieldGet(this, _RedisSocket_isOpen, "f") && __classPrivateFieldGet(this, _RedisSocket_socket, "f") === socket) {
                    __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_onSocketError).call(this, new errors_1.SocketClosedUnexpectedlyError());
                }
            }).on('drain', ()=>{
                __classPrivateFieldSet(this, _RedisSocket_writableNeedDrain, false, "f");
                this.emit('drain');
            }).on('data', (data)=>this.emit('data', data));
            resolve(socket);
        });
    });
}, _RedisSocket_createNetSocket = function _RedisSocket_createNetSocket() {
    return {
        connectEvent: 'connect',
        socket: net.connect(__classPrivateFieldGet(this, _RedisSocket_options, "f")) // TODO
    };
}, _RedisSocket_createTlsSocket = function _RedisSocket_createTlsSocket() {
    return {
        connectEvent: 'secureConnect',
        socket: tls.connect(__classPrivateFieldGet(this, _RedisSocket_options, "f")) // TODO
    };
}, _RedisSocket_onSocketError = function _RedisSocket_onSocketError(err) {
    const wasReady = __classPrivateFieldGet(this, _RedisSocket_isReady, "f");
    __classPrivateFieldSet(this, _RedisSocket_isReady, false, "f");
    this.emit('error', err);
    if (!wasReady || !__classPrivateFieldGet(this, _RedisSocket_isOpen, "f") || typeof __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_shouldReconnect).call(this, 0, err) !== 'number') return;
    this.emit('reconnecting');
    __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_connect).call(this).catch(()=>{
    // the error was already emitted, silently ignore it
    });
}, _RedisSocket_disconnect = function _RedisSocket_disconnect() {
    __classPrivateFieldSet(this, _RedisSocket_isReady, false, "f");
    if (__classPrivateFieldGet(this, _RedisSocket_socket, "f")) {
        __classPrivateFieldGet(this, _RedisSocket_socket, "f").destroy();
        __classPrivateFieldSet(this, _RedisSocket_socket, undefined, "f");
    }
    this.emit('end');
};
exports.default = RedisSocket;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/client/RESP2/composers/buffer.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$dawg$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/dawg-ai/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
class BufferComposer {
    write(buffer) {
        this.chunks.push(buffer);
    }
    end(buffer) {
        this.write(buffer);
        return __TURBOPACK__imported__module__$5b$project$5d2f$dawg$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].concat(this.chunks.splice(0));
    }
    reset() {
        this.chunks = [];
    }
    constructor(){
        Object.defineProperty(this, "chunks", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
}
exports.default = BufferComposer;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/client/RESP2/composers/string.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const string_decoder_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/string_decoder/lib/string_decoder.js [app-client] (ecmascript)");
class StringComposer {
    write(buffer) {
        this.string += this.decoder.write(buffer);
    }
    end(buffer) {
        const string = this.string + this.decoder.end(buffer);
        this.string = '';
        return string;
    }
    reset() {
        this.string = '';
    }
    constructor(){
        Object.defineProperty(this, "decoder", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new string_decoder_1.StringDecoder()
        });
        Object.defineProperty(this, "string", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ''
        });
    }
}
exports.default = StringComposer;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/client/RESP2/decoder.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const errors_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/errors.js [app-client] (ecmascript)");
const buffer_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/client/RESP2/composers/buffer.js [app-client] (ecmascript)");
const string_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/client/RESP2/composers/string.js [app-client] (ecmascript)");
// RESP2 specification
// https://redis.io/topics/protocol
var Types;
(function(Types) {
    Types[Types["SIMPLE_STRING"] = 43] = "SIMPLE_STRING";
    Types[Types["ERROR"] = 45] = "ERROR";
    Types[Types["INTEGER"] = 58] = "INTEGER";
    Types[Types["BULK_STRING"] = 36] = "BULK_STRING";
    Types[Types["ARRAY"] = 42] = "ARRAY"; // *
})(Types || (Types = {}));
var ASCII;
(function(ASCII) {
    ASCII[ASCII["CR"] = 13] = "CR";
    ASCII[ASCII["ZERO"] = 48] = "ZERO";
    ASCII[ASCII["MINUS"] = 45] = "MINUS";
})(ASCII || (ASCII = {}));
// Using TypeScript `private` and not the build-in `#` to avoid __classPrivateFieldGet and __classPrivateFieldSet
class RESP2Decoder {
    reset() {
        this.cursor = 0;
        this.type = undefined;
        this.bufferComposer.reset();
        this.stringComposer.reset();
        this.currentStringComposer = this.stringComposer;
    }
    write(chunk) {
        while(this.cursor < chunk.length){
            if (!this.type) {
                this.currentStringComposer = this.options.returnStringsAsBuffers() ? this.bufferComposer : this.stringComposer;
                this.type = chunk[this.cursor];
                if (++this.cursor >= chunk.length) break;
            }
            const reply = this.parseType(chunk, this.type);
            if (reply === undefined) break;
            this.type = undefined;
            this.options.onReply(reply);
        }
        this.cursor -= chunk.length;
    }
    parseType(chunk, type, arraysToKeep) {
        switch(type){
            case Types.SIMPLE_STRING:
                return this.parseSimpleString(chunk);
            case Types.ERROR:
                return this.parseError(chunk);
            case Types.INTEGER:
                return this.parseInteger(chunk);
            case Types.BULK_STRING:
                return this.parseBulkString(chunk);
            case Types.ARRAY:
                return this.parseArray(chunk, arraysToKeep);
        }
    }
    compose(chunk, composer) {
        for(let i = this.cursor; i < chunk.length; i++){
            if (chunk[i] === ASCII.CR) {
                const reply = composer.end(chunk.subarray(this.cursor, i));
                this.cursor = i + 2;
                return reply;
            }
        }
        const toWrite = chunk.subarray(this.cursor);
        composer.write(toWrite);
        this.cursor = chunk.length;
    }
    parseSimpleString(chunk) {
        return this.compose(chunk, this.currentStringComposer);
    }
    parseError(chunk) {
        const message = this.compose(chunk, this.stringComposer);
        if (message !== undefined) {
            return new errors_1.ErrorReply(message);
        }
    }
    parseInteger(chunk) {
        if (this.isNegativeInteger === undefined) {
            this.isNegativeInteger = chunk[this.cursor] === ASCII.MINUS;
            if (this.isNegativeInteger && ++this.cursor === chunk.length) return;
        }
        do {
            const byte = chunk[this.cursor];
            if (byte === ASCII.CR) {
                const integer = this.isNegativeInteger ? -this.integer : this.integer;
                this.integer = 0;
                this.isNegativeInteger = undefined;
                this.cursor += 2;
                return integer;
            }
            this.integer = this.integer * 10 + byte - ASCII.ZERO;
        }while (++this.cursor < chunk.length)
    }
    parseBulkString(chunk) {
        if (this.bulkStringRemainingLength === undefined) {
            const length = this.parseInteger(chunk);
            if (length === undefined) return;
            if (length === -1) return null;
            this.bulkStringRemainingLength = length;
            if (this.cursor >= chunk.length) return;
        }
        const end = this.cursor + this.bulkStringRemainingLength;
        if (chunk.length >= end) {
            const reply = this.currentStringComposer.end(chunk.subarray(this.cursor, end));
            this.bulkStringRemainingLength = undefined;
            this.cursor = end + 2;
            return reply;
        }
        const toWrite = chunk.subarray(this.cursor);
        this.currentStringComposer.write(toWrite);
        this.bulkStringRemainingLength -= toWrite.length;
        this.cursor = chunk.length;
    }
    parseArray(chunk) {
        let arraysToKeep = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        if (this.initializeArray || this.arraysInProcess.length === arraysToKeep) {
            const length = this.parseInteger(chunk);
            if (length === undefined) {
                this.initializeArray = true;
                return undefined;
            }
            this.initializeArray = false;
            this.arrayItemType = undefined;
            if (length === -1) {
                return this.returnArrayReply(null, arraysToKeep, chunk);
            } else if (length === 0) {
                return this.returnArrayReply([], arraysToKeep, chunk);
            }
            this.arraysInProcess.push({
                array: new Array(length),
                pushCounter: 0
            });
        }
        while(this.cursor < chunk.length){
            if (!this.arrayItemType) {
                this.arrayItemType = chunk[this.cursor];
                if (++this.cursor >= chunk.length) break;
            }
            const item = this.parseType(chunk, this.arrayItemType, arraysToKeep + 1);
            if (item === undefined) break;
            this.arrayItemType = undefined;
            const reply = this.pushArrayItem(item, arraysToKeep);
            if (reply !== undefined) return reply;
        }
    }
    returnArrayReply(reply, arraysToKeep, chunk) {
        if (this.arraysInProcess.length <= arraysToKeep) return reply;
        return this.pushArrayItem(reply, arraysToKeep, chunk);
    }
    pushArrayItem(item, arraysToKeep, chunk) {
        const to = this.arraysInProcess[this.arraysInProcess.length - 1];
        to.array[to.pushCounter] = item;
        if (++to.pushCounter === to.array.length) {
            return this.returnArrayReply(this.arraysInProcess.pop().array, arraysToKeep, chunk);
        } else if (chunk && chunk.length > this.cursor) {
            return this.parseArray(chunk, arraysToKeep);
        }
    }
    constructor(options){
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: options
        });
        Object.defineProperty(this, "cursor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "bufferComposer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new buffer_1.default()
        });
        Object.defineProperty(this, "stringComposer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new string_1.default()
        });
        Object.defineProperty(this, "currentStringComposer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.stringComposer
        });
        Object.defineProperty(this, "integer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "isNegativeInteger", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "bulkStringRemainingLength", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "arraysInProcess", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "initializeArray", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "arrayItemType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
exports.default = RESP2Decoder;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/client/RESP2/encoder.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$dawg$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/dawg-ai/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const CRLF = '\r\n';
function encodeCommand(args) {
    const toWrite = [];
    let strings = '*' + args.length + CRLF;
    for(let i = 0; i < args.length; i++){
        const arg = args[i];
        if (typeof arg === 'string') {
            strings += '$' + __TURBOPACK__imported__module__$5b$project$5d2f$dawg$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].byteLength(arg) + CRLF + arg + CRLF;
        } else if (arg instanceof __TURBOPACK__imported__module__$5b$project$5d2f$dawg$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"]) {
            toWrite.push(strings + '$' + arg.length.toString() + CRLF, arg);
            strings = CRLF;
        } else {
            throw new TypeError('Invalid argument type');
        }
    }
    toWrite.push(strings);
    return toWrite;
}
exports.default = encodeCommand;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/client/pub-sub.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$dawg$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/dawg-ai/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
"use strict";
var __classPrivateFieldGet = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _PubSub_instances, _a, _PubSub_channelsArray, _PubSub_listenersSet, _PubSub_subscribing, _PubSub_isActive, _PubSub_listeners, _PubSub_extendChannelListeners, _PubSub_unsubscribeCommand, _PubSub_updateIsActive, _PubSub_emitPubSubMessage;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PubSub = exports.PubSubType = void 0;
var PubSubType;
(function(PubSubType) {
    PubSubType["CHANNELS"] = "CHANNELS";
    PubSubType["PATTERNS"] = "PATTERNS";
    PubSubType["SHARDED"] = "SHARDED";
})(PubSubType || (exports.PubSubType = PubSubType = {}));
const COMMANDS = {
    [PubSubType.CHANNELS]: {
        subscribe: __TURBOPACK__imported__module__$5b$project$5d2f$dawg$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from('subscribe'),
        unsubscribe: __TURBOPACK__imported__module__$5b$project$5d2f$dawg$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from('unsubscribe'),
        message: __TURBOPACK__imported__module__$5b$project$5d2f$dawg$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from('message')
    },
    [PubSubType.PATTERNS]: {
        subscribe: __TURBOPACK__imported__module__$5b$project$5d2f$dawg$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from('psubscribe'),
        unsubscribe: __TURBOPACK__imported__module__$5b$project$5d2f$dawg$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from('punsubscribe'),
        message: __TURBOPACK__imported__module__$5b$project$5d2f$dawg$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from('pmessage')
    },
    [PubSubType.SHARDED]: {
        subscribe: __TURBOPACK__imported__module__$5b$project$5d2f$dawg$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from('ssubscribe'),
        unsubscribe: __TURBOPACK__imported__module__$5b$project$5d2f$dawg$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from('sunsubscribe'),
        message: __TURBOPACK__imported__module__$5b$project$5d2f$dawg$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from('smessage')
    }
};
class PubSub {
    static isStatusReply(reply) {
        return COMMANDS[PubSubType.CHANNELS].subscribe.equals(reply[0]) || COMMANDS[PubSubType.CHANNELS].unsubscribe.equals(reply[0]) || COMMANDS[PubSubType.PATTERNS].subscribe.equals(reply[0]) || COMMANDS[PubSubType.PATTERNS].unsubscribe.equals(reply[0]) || COMMANDS[PubSubType.SHARDED].subscribe.equals(reply[0]);
    }
    static isShardedUnsubscribe(reply) {
        return COMMANDS[PubSubType.SHARDED].unsubscribe.equals(reply[0]);
    }
    get isActive() {
        return __classPrivateFieldGet(this, _PubSub_isActive, "f");
    }
    subscribe(type, channels, listener, returnBuffers) {
        var _b;
        const args = [
            COMMANDS[type].subscribe
        ], channelsArray = __classPrivateFieldGet(_a, _a, "m", _PubSub_channelsArray).call(_a, channels);
        for (const channel of channelsArray){
            let channelListeners = __classPrivateFieldGet(this, _PubSub_listeners, "f")[type].get(channel);
            if (!channelListeners || channelListeners.unsubscribing) {
                args.push(channel);
            }
        }
        if (args.length === 1) {
            // all channels are already subscribed, add listeners without issuing a command
            for (const channel of channelsArray){
                __classPrivateFieldGet(_a, _a, "m", _PubSub_listenersSet).call(_a, __classPrivateFieldGet(this, _PubSub_listeners, "f")[type].get(channel), returnBuffers).add(listener);
            }
            return;
        }
        __classPrivateFieldSet(this, _PubSub_isActive, true, "f");
        __classPrivateFieldSet(this, _PubSub_subscribing, (_b = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b++, _b), "f");
        return {
            args,
            channelsCounter: args.length - 1,
            resolve: ()=>{
                var _b;
                __classPrivateFieldSet(this, _PubSub_subscribing, (_b = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b--, _b), "f");
                for (const channel of channelsArray){
                    let listeners = __classPrivateFieldGet(this, _PubSub_listeners, "f")[type].get(channel);
                    if (!listeners) {
                        listeners = {
                            unsubscribing: false,
                            buffers: new Set(),
                            strings: new Set()
                        };
                        __classPrivateFieldGet(this, _PubSub_listeners, "f")[type].set(channel, listeners);
                    }
                    __classPrivateFieldGet(_a, _a, "m", _PubSub_listenersSet).call(_a, listeners, returnBuffers).add(listener);
                }
            },
            reject: ()=>{
                var _b;
                __classPrivateFieldSet(this, _PubSub_subscribing, (_b = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b--, _b), "f");
                __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_updateIsActive).call(this);
            }
        };
    }
    extendChannelListeners(type, channel, listeners) {
        var _b;
        if (!__classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_extendChannelListeners).call(this, type, channel, listeners)) return;
        __classPrivateFieldSet(this, _PubSub_isActive, true, "f");
        __classPrivateFieldSet(this, _PubSub_subscribing, (_b = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b++, _b), "f");
        return {
            args: [
                COMMANDS[type].subscribe,
                channel
            ],
            channelsCounter: 1,
            resolve: ()=>{
                var _b, _c;
                return __classPrivateFieldSet(this, _PubSub_subscribing, (_c = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b = _c--, _c), "f"), _b;
            },
            reject: ()=>{
                var _b;
                __classPrivateFieldSet(this, _PubSub_subscribing, (_b = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b--, _b), "f");
                __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_updateIsActive).call(this);
            }
        };
    }
    extendTypeListeners(type, listeners) {
        var _b;
        const args = [
            COMMANDS[type].subscribe
        ];
        for (const [channel, channelListeners] of listeners){
            if (__classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_extendChannelListeners).call(this, type, channel, channelListeners)) {
                args.push(channel);
            }
        }
        if (args.length === 1) return;
        __classPrivateFieldSet(this, _PubSub_isActive, true, "f");
        __classPrivateFieldSet(this, _PubSub_subscribing, (_b = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b++, _b), "f");
        return {
            args,
            channelsCounter: args.length - 1,
            resolve: ()=>{
                var _b, _c;
                return __classPrivateFieldSet(this, _PubSub_subscribing, (_c = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b = _c--, _c), "f"), _b;
            },
            reject: ()=>{
                var _b;
                __classPrivateFieldSet(this, _PubSub_subscribing, (_b = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b--, _b), "f");
                __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_updateIsActive).call(this);
            }
        };
    }
    unsubscribe(type, channels, listener, returnBuffers) {
        const listeners = __classPrivateFieldGet(this, _PubSub_listeners, "f")[type];
        if (!channels) {
            return __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_unsubscribeCommand).call(this, [
                COMMANDS[type].unsubscribe
            ], // cannot use `this.#subscribed` because there might be some `SUBSCRIBE` commands in the queue
            // cannot use `this.#subscribed + this.#subscribing` because some `SUBSCRIBE` commands might fail
            NaN, ()=>listeners.clear());
        }
        const channelsArray = __classPrivateFieldGet(_a, _a, "m", _PubSub_channelsArray).call(_a, channels);
        if (!listener) {
            return __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_unsubscribeCommand).call(this, [
                COMMANDS[type].unsubscribe,
                ...channelsArray
            ], channelsArray.length, ()=>{
                for (const channel of channelsArray){
                    listeners.delete(channel);
                }
            });
        }
        const args = [
            COMMANDS[type].unsubscribe
        ];
        for (const channel of channelsArray){
            const sets = listeners.get(channel);
            if (sets) {
                let current, other;
                if (returnBuffers) {
                    current = sets.buffers;
                    other = sets.strings;
                } else {
                    current = sets.strings;
                    other = sets.buffers;
                }
                const currentSize = current.has(listener) ? current.size - 1 : current.size;
                if (currentSize !== 0 || other.size !== 0) continue;
                sets.unsubscribing = true;
            }
            args.push(channel);
        }
        if (args.length === 1) {
            // all channels has other listeners,
            // delete the listeners without issuing a command
            for (const channel of channelsArray){
                __classPrivateFieldGet(_a, _a, "m", _PubSub_listenersSet).call(_a, listeners.get(channel), returnBuffers).delete(listener);
            }
            return;
        }
        return __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_unsubscribeCommand).call(this, args, args.length - 1, ()=>{
            for (const channel of channelsArray){
                const sets = listeners.get(channel);
                if (!sets) continue;
                (returnBuffers ? sets.buffers : sets.strings).delete(listener);
                if (sets.buffers.size === 0 && sets.strings.size === 0) {
                    listeners.delete(channel);
                }
            }
        });
    }
    reset() {
        __classPrivateFieldSet(this, _PubSub_isActive, false, "f");
        __classPrivateFieldSet(this, _PubSub_subscribing, 0, "f");
    }
    resubscribe() {
        var _b;
        const commands = [];
        for (const [type, listeners] of Object.entries(__classPrivateFieldGet(this, _PubSub_listeners, "f"))){
            if (!listeners.size) continue;
            __classPrivateFieldSet(this, _PubSub_isActive, true, "f");
            __classPrivateFieldSet(this, _PubSub_subscribing, (_b = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b++, _b), "f");
            const callback = ()=>{
                var _b, _c;
                return __classPrivateFieldSet(this, _PubSub_subscribing, (_c = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b = _c--, _c), "f"), _b;
            };
            commands.push({
                args: [
                    COMMANDS[type].subscribe,
                    ...listeners.keys()
                ],
                channelsCounter: listeners.size,
                resolve: callback,
                reject: callback
            });
        }
        return commands;
    }
    handleMessageReply(reply) {
        if (COMMANDS[PubSubType.CHANNELS].message.equals(reply[0])) {
            __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_emitPubSubMessage).call(this, PubSubType.CHANNELS, reply[2], reply[1]);
            return true;
        } else if (COMMANDS[PubSubType.PATTERNS].message.equals(reply[0])) {
            __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_emitPubSubMessage).call(this, PubSubType.PATTERNS, reply[3], reply[2], reply[1]);
            return true;
        } else if (COMMANDS[PubSubType.SHARDED].message.equals(reply[0])) {
            __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_emitPubSubMessage).call(this, PubSubType.SHARDED, reply[2], reply[1]);
            return true;
        }
        return false;
    }
    removeShardedListeners(channel) {
        const listeners = __classPrivateFieldGet(this, _PubSub_listeners, "f")[PubSubType.SHARDED].get(channel);
        __classPrivateFieldGet(this, _PubSub_listeners, "f")[PubSubType.SHARDED].delete(channel);
        __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_updateIsActive).call(this);
        return listeners;
    }
    getTypeListeners(type) {
        return __classPrivateFieldGet(this, _PubSub_listeners, "f")[type];
    }
    constructor(){
        _PubSub_instances.add(this);
        _PubSub_subscribing.set(this, 0);
        _PubSub_isActive.set(this, false);
        _PubSub_listeners.set(this, {
            [PubSubType.CHANNELS]: new Map(),
            [PubSubType.PATTERNS]: new Map(),
            [PubSubType.SHARDED]: new Map()
        });
    }
}
exports.PubSub = PubSub;
_a = PubSub, _PubSub_subscribing = new WeakMap(), _PubSub_isActive = new WeakMap(), _PubSub_listeners = new WeakMap(), _PubSub_instances = new WeakSet(), _PubSub_channelsArray = function _PubSub_channelsArray(channels) {
    return Array.isArray(channels) ? channels : [
        channels
    ];
}, _PubSub_listenersSet = function _PubSub_listenersSet(listeners, returnBuffers) {
    return returnBuffers ? listeners.buffers : listeners.strings;
}, _PubSub_extendChannelListeners = function _PubSub_extendChannelListeners(type, channel, listeners) {
    const existingListeners = __classPrivateFieldGet(this, _PubSub_listeners, "f")[type].get(channel);
    if (!existingListeners) {
        __classPrivateFieldGet(this, _PubSub_listeners, "f")[type].set(channel, listeners);
        return true;
    }
    for (const listener of listeners.buffers){
        existingListeners.buffers.add(listener);
    }
    for (const listener of listeners.strings){
        existingListeners.strings.add(listener);
    }
    return false;
}, _PubSub_unsubscribeCommand = function _PubSub_unsubscribeCommand(args, channelsCounter, removeListeners) {
    return {
        args,
        channelsCounter,
        resolve: ()=>{
            removeListeners();
            __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_updateIsActive).call(this);
        },
        reject: undefined // use the same structure as `subscribe`
    };
}, _PubSub_updateIsActive = function _PubSub_updateIsActive() {
    __classPrivateFieldSet(this, _PubSub_isActive, __classPrivateFieldGet(this, _PubSub_listeners, "f")[PubSubType.CHANNELS].size !== 0 || __classPrivateFieldGet(this, _PubSub_listeners, "f")[PubSubType.PATTERNS].size !== 0 || __classPrivateFieldGet(this, _PubSub_listeners, "f")[PubSubType.SHARDED].size !== 0 || __classPrivateFieldGet(this, _PubSub_subscribing, "f") !== 0, "f");
}, _PubSub_emitPubSubMessage = function _PubSub_emitPubSubMessage(type, message, channel, pattern) {
    const keyString = (pattern !== null && pattern !== void 0 ? pattern : channel).toString(), listeners = __classPrivateFieldGet(this, _PubSub_listeners, "f")[type].get(keyString);
    if (!listeners) return;
    for (const listener of listeners.buffers){
        listener(message, channel);
    }
    if (!listeners.strings.size) return;
    const channelString = pattern ? channel.toString() : keyString, messageString = channelString === '__redis__:invalidate' ? message === null ? null : message.map((x)=>x.toString()) : message.toString();
    for (const listener of listeners.strings){
        listener(messageString, channelString);
    }
};
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/client/commands-queue.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$dawg$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/dawg-ai/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
"use strict";
var __classPrivateFieldGet = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _RedisCommandsQueue_instances, _a, _RedisCommandsQueue_flushQueue, _RedisCommandsQueue_maxLength, _RedisCommandsQueue_waitingToBeSent, _RedisCommandsQueue_waitingForReply, _RedisCommandsQueue_onShardedChannelMoved, _RedisCommandsQueue_pubSub, _RedisCommandsQueue_chainInExecution, _RedisCommandsQueue_decoder, _RedisCommandsQueue_pushPubSubCommand;
Object.defineProperty(exports, "__esModule", {
    value: true
});
const LinkedList = __turbopack_context__.r("[project]/dawg-ai/node_modules/yallist/yallist.js [app-client] (ecmascript)");
const errors_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/errors.js [app-client] (ecmascript)");
const decoder_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/client/RESP2/decoder.js [app-client] (ecmascript)");
const encoder_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/client/RESP2/encoder.js [app-client] (ecmascript)");
const pub_sub_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/client/pub-sub.js [app-client] (ecmascript)");
const PONG = __TURBOPACK__imported__module__$5b$project$5d2f$dawg$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from('pong');
class RedisCommandsQueue {
    get isPubSubActive() {
        return __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").isActive;
    }
    addCommand(args, options) {
        var _options_signal;
        if (__classPrivateFieldGet(this, _RedisCommandsQueue_maxLength, "f") && __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").length + __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").length >= __classPrivateFieldGet(this, _RedisCommandsQueue_maxLength, "f")) {
            return Promise.reject(new Error('The queue is full'));
        } else if (options === null || options === void 0 ? void 0 : (_options_signal = options.signal) === null || _options_signal === void 0 ? void 0 : _options_signal.aborted) {
            return Promise.reject(new errors_1.AbortError());
        }
        return new Promise((resolve, reject)=>{
            const node = new LinkedList.Node({
                args,
                chainId: options === null || options === void 0 ? void 0 : options.chainId,
                returnBuffers: options === null || options === void 0 ? void 0 : options.returnBuffers,
                resolve,
                reject
            });
            if (options === null || options === void 0 ? void 0 : options.signal) {
                const listener = ()=>{
                    __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").removeNode(node);
                    node.value.reject(new errors_1.AbortError());
                };
                node.value.abort = {
                    signal: options.signal,
                    listener
                };
                // AbortSignal type is incorrent
                options.signal.addEventListener('abort', listener, {
                    once: true
                });
            }
            if (options === null || options === void 0 ? void 0 : options.asap) {
                __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").unshiftNode(node);
            } else {
                __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").pushNode(node);
            }
        });
    }
    subscribe(type, channels, listener, returnBuffers) {
        return __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_pushPubSubCommand).call(this, __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").subscribe(type, channels, listener, returnBuffers));
    }
    unsubscribe(type, channels, listener, returnBuffers) {
        return __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_pushPubSubCommand).call(this, __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").unsubscribe(type, channels, listener, returnBuffers));
    }
    resubscribe() {
        const commands = __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").resubscribe();
        if (!commands.length) return;
        return Promise.all(commands.map((command)=>__classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_pushPubSubCommand).call(this, command)));
    }
    extendPubSubChannelListeners(type, channel, listeners) {
        return __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_pushPubSubCommand).call(this, __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").extendChannelListeners(type, channel, listeners));
    }
    extendPubSubListeners(type, listeners) {
        return __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_pushPubSubCommand).call(this, __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").extendTypeListeners(type, listeners));
    }
    getPubSubListeners(type) {
        return __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").getTypeListeners(type);
    }
    getCommandToSend() {
        const toSend = __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").shift();
        if (!toSend) return;
        let encoded;
        try {
            encoded = (0, encoder_1.default)(toSend.args);
        } catch (err) {
            toSend.reject(err);
            return;
        }
        __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").push({
            resolve: toSend.resolve,
            reject: toSend.reject,
            channelsCounter: toSend.channelsCounter,
            returnBuffers: toSend.returnBuffers
        });
        __classPrivateFieldSet(this, _RedisCommandsQueue_chainInExecution, toSend.chainId, "f");
        return encoded;
    }
    onReplyChunk(chunk) {
        __classPrivateFieldGet(this, _RedisCommandsQueue_decoder, "f").write(chunk);
    }
    flushWaitingForReply(err) {
        var __classPrivateFieldGet_head;
        __classPrivateFieldGet(this, _RedisCommandsQueue_decoder, "f").reset();
        __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").reset();
        __classPrivateFieldGet(_a, _a, "m", _RedisCommandsQueue_flushQueue).call(_a, __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f"), err);
        if (!__classPrivateFieldGet(this, _RedisCommandsQueue_chainInExecution, "f")) return;
        while(((__classPrivateFieldGet_head = __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").head) === null || __classPrivateFieldGet_head === void 0 ? void 0 : __classPrivateFieldGet_head.value.chainId) === __classPrivateFieldGet(this, _RedisCommandsQueue_chainInExecution, "f")){
            __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").shift();
        }
        __classPrivateFieldSet(this, _RedisCommandsQueue_chainInExecution, undefined, "f");
    }
    flushAll(err) {
        __classPrivateFieldGet(this, _RedisCommandsQueue_decoder, "f").reset();
        __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").reset();
        __classPrivateFieldGet(_a, _a, "m", _RedisCommandsQueue_flushQueue).call(_a, __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f"), err);
        __classPrivateFieldGet(_a, _a, "m", _RedisCommandsQueue_flushQueue).call(_a, __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f"), err);
    }
    constructor(maxLength, onShardedChannelMoved){
        _RedisCommandsQueue_instances.add(this);
        _RedisCommandsQueue_maxLength.set(this, void 0);
        _RedisCommandsQueue_waitingToBeSent.set(this, new LinkedList());
        _RedisCommandsQueue_waitingForReply.set(this, new LinkedList());
        _RedisCommandsQueue_onShardedChannelMoved.set(this, void 0);
        _RedisCommandsQueue_pubSub.set(this, new pub_sub_1.PubSub());
        _RedisCommandsQueue_chainInExecution.set(this, void 0);
        _RedisCommandsQueue_decoder.set(this, new decoder_1.default({
            returnStringsAsBuffers: ()=>{
                var __classPrivateFieldGet_head;
                return !!((__classPrivateFieldGet_head = __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").head) === null || __classPrivateFieldGet_head === void 0 ? void 0 : __classPrivateFieldGet_head.value.returnBuffers) || __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").isActive;
            },
            onReply: (reply)=>{
                if (__classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").isActive && Array.isArray(reply)) {
                    if (__classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").handleMessageReply(reply)) return;
                    const isShardedUnsubscribe = pub_sub_1.PubSub.isShardedUnsubscribe(reply);
                    if (isShardedUnsubscribe && !__classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").length) {
                        const channel = reply[1].toString();
                        __classPrivateFieldGet(this, _RedisCommandsQueue_onShardedChannelMoved, "f").call(this, channel, __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").removeShardedListeners(channel));
                        return;
                    } else if (isShardedUnsubscribe || pub_sub_1.PubSub.isStatusReply(reply)) {
                        const head = __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").head.value;
                        if (Number.isNaN(head.channelsCounter) && reply[2] === 0 || --head.channelsCounter === 0) {
                            __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").shift().resolve();
                        }
                        return;
                    }
                    if (PONG.equals(reply[0])) {
                        const { resolve, returnBuffers } = __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").shift(), buffer = reply[1].length === 0 ? reply[0] : reply[1];
                        resolve(returnBuffers ? buffer : buffer.toString());
                        return;
                    }
                }
                const { resolve, reject } = __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").shift();
                if (reply instanceof errors_1.ErrorReply) {
                    reject(reply);
                } else {
                    resolve(reply);
                }
            }
        }));
        __classPrivateFieldSet(this, _RedisCommandsQueue_maxLength, maxLength, "f");
        __classPrivateFieldSet(this, _RedisCommandsQueue_onShardedChannelMoved, onShardedChannelMoved, "f");
    }
}
_a = RedisCommandsQueue, _RedisCommandsQueue_maxLength = new WeakMap(), _RedisCommandsQueue_waitingToBeSent = new WeakMap(), _RedisCommandsQueue_waitingForReply = new WeakMap(), _RedisCommandsQueue_onShardedChannelMoved = new WeakMap(), _RedisCommandsQueue_pubSub = new WeakMap(), _RedisCommandsQueue_chainInExecution = new WeakMap(), _RedisCommandsQueue_decoder = new WeakMap(), _RedisCommandsQueue_instances = new WeakSet(), _RedisCommandsQueue_flushQueue = function _RedisCommandsQueue_flushQueue(queue, err) {
    while(queue.length){
        queue.shift().reject(err);
    }
}, _RedisCommandsQueue_pushPubSubCommand = function _RedisCommandsQueue_pushPubSubCommand(command) {
    if (command === undefined) return;
    return new Promise((resolve, reject)=>{
        __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").push({
            args: command.args,
            channelsCounter: command.channelsCounter,
            returnBuffers: true,
            resolve: ()=>{
                command.resolve();
                resolve();
            },
            reject: (err)=>{
                var _command_reject;
                (_command_reject = command.reject) === null || _command_reject === void 0 ? void 0 : _command_reject.call(command);
                reject(err);
            }
        });
    });
};
exports.default = RedisCommandsQueue;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/command-options.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isCommandOptions = exports.commandOptions = void 0;
const symbol = Symbol('Command Options');
function commandOptions(options) {
    options[symbol] = true;
    return options;
}
exports.commandOptions = commandOptions;
function isCommandOptions(options) {
    return (options === null || options === void 0 ? void 0 : options[symbol]) === true;
}
exports.isCommandOptions = isCommandOptions;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/commander.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fCallArguments = exports.transformCommandReply = exports.transformLegacyCommandArguments = exports.transformCommandArguments = exports.attachExtensions = exports.attachCommands = void 0;
const command_options_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/command-options.js [app-client] (ecmascript)");
function attachCommands(param) {
    let { BaseClass, commands, executor } = param;
    for (const [name, command] of Object.entries(commands)){
        BaseClass.prototype[name] = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return executor.call(this, command, args, name);
        };
    }
}
exports.attachCommands = attachCommands;
function attachExtensions(config) {
    let Commander;
    if (config.modules) {
        Commander = attachWithNamespaces({
            BaseClass: config.BaseClass,
            namespaces: config.modules,
            executor: config.modulesExecutor
        });
    }
    if (config.functions) {
        Commander = attachWithNamespaces({
            BaseClass: Commander !== null && Commander !== void 0 ? Commander : config.BaseClass,
            namespaces: config.functions,
            executor: config.functionsExecutor
        });
    }
    if (config.scripts) {
        Commander !== null && Commander !== void 0 ? Commander : Commander = class extends config.BaseClass {
        };
        attachCommands({
            BaseClass: Commander,
            commands: config.scripts,
            executor: config.scriptsExecutor
        });
    }
    return Commander !== null && Commander !== void 0 ? Commander : config.BaseClass;
}
exports.attachExtensions = attachExtensions;
function attachWithNamespaces(param) {
    let { BaseClass, namespaces, executor } = param;
    const Commander = class extends BaseClass {
        constructor(...args){
            super(...args);
            for (const namespace of Object.keys(namespaces)){
                this[namespace] = Object.create(this[namespace], {
                    self: {
                        value: this
                    }
                });
            }
        }
    };
    for (const [namespace, commands] of Object.entries(namespaces)){
        Commander.prototype[namespace] = {};
        for (const [name, command] of Object.entries(commands)){
            Commander.prototype[namespace][name] = function() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                return executor.call(this.self, command, args, name);
            };
        }
    }
    return Commander;
}
function transformCommandArguments(command, args) {
    let options;
    if ((0, command_options_1.isCommandOptions)(args[0])) {
        options = args[0];
        args = args.slice(1);
    }
    return {
        jsArgs: args,
        args: command.transformArguments(...args),
        options
    };
}
exports.transformCommandArguments = transformCommandArguments;
function transformLegacyCommandArguments(args) {
    return args.flat().map((arg)=>{
        return typeof arg === 'number' || arg instanceof Date ? arg.toString() : arg;
    });
}
exports.transformLegacyCommandArguments = transformLegacyCommandArguments;
function transformCommandReply(command, rawReply, preserved) {
    if (!command.transformReply) {
        return rawReply;
    }
    return command.transformReply(rawReply, preserved);
}
exports.transformCommandReply = transformCommandReply;
function fCallArguments(name, fn, args) {
    const actualArgs = [
        fn.IS_READ_ONLY ? 'FCALL_RO' : 'FCALL',
        name
    ];
    if (fn.NUMBER_OF_KEYS !== undefined) {
        actualArgs.push(fn.NUMBER_OF_KEYS.toString());
    }
    actualArgs.push(...args);
    return actualArgs;
}
exports.fCallArguments = fCallArguments;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/multi-command.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const commander_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commander.js [app-client] (ecmascript)");
const errors_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/errors.js [app-client] (ecmascript)");
class RedisMultiCommand {
    static generateChainId() {
        return Symbol('RedisMultiCommand Chain Id');
    }
    addCommand(args, transformReply) {
        this.queue.push({
            args,
            transformReply
        });
    }
    addFunction(name, fn, args) {
        const transformedArguments = (0, commander_1.fCallArguments)(name, fn, fn.transformArguments(...args));
        this.queue.push({
            args: transformedArguments,
            transformReply: fn.transformReply
        });
        return transformedArguments;
    }
    addScript(script, args) {
        const transformedArguments = [];
        if (this.scriptsInUse.has(script.SHA1)) {
            transformedArguments.push('EVALSHA', script.SHA1);
        } else {
            this.scriptsInUse.add(script.SHA1);
            transformedArguments.push('EVAL', script.SCRIPT);
        }
        if (script.NUMBER_OF_KEYS !== undefined) {
            transformedArguments.push(script.NUMBER_OF_KEYS.toString());
        }
        const scriptArguments = script.transformArguments(...args);
        transformedArguments.push(...scriptArguments);
        if (scriptArguments.preserve) {
            transformedArguments.preserve = scriptArguments.preserve;
        }
        this.addCommand(transformedArguments, script.transformReply);
        return transformedArguments;
    }
    handleExecReplies(rawReplies) {
        const execReply = rawReplies[rawReplies.length - 1];
        if (execReply === null) {
            throw new errors_1.WatchError();
        }
        return this.transformReplies(execReply);
    }
    transformReplies(rawReplies) {
        const errorIndexes = [], replies = rawReplies.map((reply, i)=>{
            if (reply instanceof errors_1.ErrorReply) {
                errorIndexes.push(i);
                return reply;
            }
            const { transformReply, args } = this.queue[i];
            return transformReply ? transformReply(reply, args.preserve) : reply;
        });
        if (errorIndexes.length) throw new errors_1.MultiErrorReply(replies, errorIndexes);
        return replies;
    }
    constructor(){
        Object.defineProperty(this, "queue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "scriptsInUse", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Set()
        });
    }
}
exports.default = RedisMultiCommand;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/client/multi-command.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __classPrivateFieldSet = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _RedisClientMultiCommand_instances, _RedisClientMultiCommand_multi, _RedisClientMultiCommand_executor, _RedisClientMultiCommand_selectedDB, _RedisClientMultiCommand_legacyMode, _RedisClientMultiCommand_defineLegacyCommand;
Object.defineProperty(exports, "__esModule", {
    value: true
});
const commands_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/client/commands.js [app-client] (ecmascript)");
const multi_command_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/multi-command.js [app-client] (ecmascript)");
const commander_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commander.js [app-client] (ecmascript)");
class RedisClientMultiCommand {
    static extend(extensions) {
        return (0, commander_1.attachExtensions)({
            BaseClass: RedisClientMultiCommand,
            modulesExecutor: RedisClientMultiCommand.prototype.commandsExecutor,
            modules: extensions === null || extensions === void 0 ? void 0 : extensions.modules,
            functionsExecutor: RedisClientMultiCommand.prototype.functionsExecutor,
            functions: extensions === null || extensions === void 0 ? void 0 : extensions.functions,
            scriptsExecutor: RedisClientMultiCommand.prototype.scriptsExecutor,
            scripts: extensions === null || extensions === void 0 ? void 0 : extensions.scripts
        });
    }
    commandsExecutor(command, args) {
        return this.addCommand(command.transformArguments(...args), command.transformReply);
    }
    SELECT(db, transformReply) {
        __classPrivateFieldSet(this, _RedisClientMultiCommand_selectedDB, db, "f");
        return this.addCommand([
            'SELECT',
            db.toString()
        ], transformReply);
    }
    addCommand(args, transformReply) {
        __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").addCommand(args, transformReply);
        return this;
    }
    functionsExecutor(fn, args, name) {
        __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").addFunction(name, fn, args);
        return this;
    }
    scriptsExecutor(script, args) {
        __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").addScript(script, args);
        return this;
    }
    async exec() {
        let execAsPipeline = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        if (execAsPipeline) {
            return this.execAsPipeline();
        }
        return __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").handleExecReplies(await __classPrivateFieldGet(this, _RedisClientMultiCommand_executor, "f").call(this, __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").queue, __classPrivateFieldGet(this, _RedisClientMultiCommand_selectedDB, "f"), multi_command_1.default.generateChainId()));
    }
    async execAsPipeline() {
        if (__classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").queue.length === 0) return [];
        return __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").transformReplies(await __classPrivateFieldGet(this, _RedisClientMultiCommand_executor, "f").call(this, __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").queue, __classPrivateFieldGet(this, _RedisClientMultiCommand_selectedDB, "f")));
    }
    constructor(executor, legacyMode = false){
        _RedisClientMultiCommand_instances.add(this);
        _RedisClientMultiCommand_multi.set(this, new multi_command_1.default());
        _RedisClientMultiCommand_executor.set(this, void 0);
        Object.defineProperty(this, "v4", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        _RedisClientMultiCommand_selectedDB.set(this, void 0);
        Object.defineProperty(this, "select", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.SELECT
        });
        Object.defineProperty(this, "EXEC", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.exec
        });
        __classPrivateFieldSet(this, _RedisClientMultiCommand_executor, executor, "f");
        if (legacyMode) {
            __classPrivateFieldGet(this, _RedisClientMultiCommand_instances, "m", _RedisClientMultiCommand_legacyMode).call(this);
        }
    }
}
_RedisClientMultiCommand_multi = new WeakMap(), _RedisClientMultiCommand_executor = new WeakMap(), _RedisClientMultiCommand_selectedDB = new WeakMap(), _RedisClientMultiCommand_instances = new WeakSet(), _RedisClientMultiCommand_legacyMode = function _RedisClientMultiCommand_legacyMode() {
    var _this = this;
    var _a, _b;
    this.v4.addCommand = this.addCommand.bind(this);
    this.addCommand = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        __classPrivateFieldGet(_this, _RedisClientMultiCommand_multi, "f").addCommand((0, commander_1.transformLegacyCommandArguments)(args));
        return _this;
    };
    this.v4.exec = this.exec.bind(this);
    this.exec = (callback)=>{
        this.v4.exec().then((reply)=>{
            if (!callback) return;
            callback(null, reply);
        }).catch((err)=>{
            if (!callback) {
                // this.emit('error', err);
                return;
            }
            callback(err);
        });
    };
    for (const [name, command] of Object.entries(commands_1.default)){
        __classPrivateFieldGet(this, _RedisClientMultiCommand_instances, "m", _RedisClientMultiCommand_defineLegacyCommand).call(this, name, command);
        var _;
        (_ = (_a = this)[_b = name.toLowerCase()]) !== null && _ !== void 0 ? _ : _a[_b] = this[name];
    }
}, _RedisClientMultiCommand_defineLegacyCommand = function _RedisClientMultiCommand_defineLegacyCommand(name, command) {
    var _this = this;
    this.v4[name] = this[name].bind(this.v4);
    this[name] = command && command.TRANSFORM_LEGACY_REPLY && command.transformReply ? function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        __classPrivateFieldGet(_this, _RedisClientMultiCommand_multi, "f").addCommand([
            name,
            ...(0, commander_1.transformLegacyCommandArguments)(args)
        ], command.transformReply);
        return _this;
    } : function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return _this.addCommand(name, ...args);
    };
};
exports.default = RedisClientMultiCommand;
(0, commander_1.attachCommands)({
    BaseClass: RedisClientMultiCommand,
    commands: commands_1.default,
    executor: RedisClientMultiCommand.prototype.commandsExecutor
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/package.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"name\":\"@redis/client\",\"version\":\"1.6.0\",\"license\":\"MIT\",\"main\":\"./dist/index.js\",\"types\":\"./dist/index.d.ts\",\"files\":[\"dist/\"],\"scripts\":{\"test\":\"nyc -r text-summary -r lcov mocha -r source-map-support/register -r ts-node/register './lib/**/*.spec.ts'\",\"build\":\"tsc\",\"lint\":\"eslint ./*.ts ./lib/**/*.ts\",\"documentation\":\"typedoc\"},\"dependencies\":{\"cluster-key-slot\":\"1.1.2\",\"generic-pool\":\"3.9.0\",\"yallist\":\"4.0.0\"},\"devDependencies\":{\"@istanbuljs/nyc-config-typescript\":\"^1.0.2\",\"@redis/test-utils\":\"*\",\"@types/node\":\"^20.6.2\",\"@types/sinon\":\"^10.0.16\",\"@types/yallist\":\"^4.0.1\",\"@typescript-eslint/eslint-plugin\":\"^6.7.2\",\"@typescript-eslint/parser\":\"^6.7.2\",\"eslint\":\"^8.49.0\",\"nyc\":\"^15.1.0\",\"release-it\":\"^16.1.5\",\"sinon\":\"^16.0.0\",\"source-map-support\":\"^0.5.21\",\"ts-node\":\"^10.9.1\",\"typedoc\":\"^0.25.1\",\"typescript\":\"^5.2.2\"},\"engines\":{\"node\":\">=14\"},\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/redis/node-redis.git\"},\"bugs\":{\"url\":\"https://github.com/redis/node-redis/issues\"},\"homepage\":\"https://github.com/redis/node-redis/tree/master/packages/client\",\"keywords\":[\"redis\"]}"));}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/client/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __classPrivateFieldGet = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _RedisClient_instances, _a, _RedisClient_options, _RedisClient_socket, _RedisClient_queue, _RedisClient_isolationPool, _RedisClient_v4, _RedisClient_selectedDB, _RedisClient_initiateOptions, _RedisClient_initiateQueue, _RedisClient_initiateSocket, _RedisClient_initiateIsolationPool, _RedisClient_legacyMode, _RedisClient_legacySendCommand, _RedisClient_defineLegacyCommand, _RedisClient_pingTimer, _RedisClient_setPingTimer, _RedisClient_sendCommand, _RedisClient_pubSubCommand, _RedisClient_tick, _RedisClient_addMultiCommands, _RedisClient_destroyIsolationPool;
Object.defineProperty(exports, "__esModule", {
    value: true
});
const commands_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/client/commands.js [app-client] (ecmascript)");
const socket_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/client/socket.js [app-client] (ecmascript)");
const commands_queue_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/client/commands-queue.js [app-client] (ecmascript)");
const multi_command_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/client/multi-command.js [app-client] (ecmascript)");
const events_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/events/events.js [app-client] (ecmascript)");
const command_options_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/command-options.js [app-client] (ecmascript)");
const commander_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commander.js [app-client] (ecmascript)");
const generic_pool_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/generic-pool/index.js [app-client] (ecmascript)");
const errors_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/errors.js [app-client] (ecmascript)");
const url_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/next/dist/compiled/native-url/index.js [app-client] (ecmascript)");
const pub_sub_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/client/pub-sub.js [app-client] (ecmascript)");
const package_json_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/package.json (json)");
class RedisClient extends events_1.EventEmitter {
    static commandOptions(options) {
        return (0, command_options_1.commandOptions)(options);
    }
    static extend(extensions) {
        const Client = (0, commander_1.attachExtensions)({
            BaseClass: _a,
            modulesExecutor: _a.prototype.commandsExecutor,
            modules: extensions === null || extensions === void 0 ? void 0 : extensions.modules,
            functionsExecutor: _a.prototype.functionsExecuter,
            functions: extensions === null || extensions === void 0 ? void 0 : extensions.functions,
            scriptsExecutor: _a.prototype.scriptsExecuter,
            scripts: extensions === null || extensions === void 0 ? void 0 : extensions.scripts
        });
        if (Client !== _a) {
            Client.prototype.Multi = multi_command_1.default.extend(extensions);
        }
        return Client;
    }
    static create(options) {
        return new (_a.extend(options))(options);
    }
    static parseURL(url) {
        // https://www.iana.org/assignments/uri-schemes/prov/redis
        const { hostname, port, protocol, username, password, pathname } = new url_1.URL(url), parsed = {
            socket: {
                host: hostname
            }
        };
        if (protocol === 'rediss:') {
            parsed.socket.tls = true;
        } else if (protocol !== 'redis:') {
            throw new TypeError('Invalid protocol');
        }
        if (port) {
            parsed.socket.port = Number(port);
        }
        if (username) {
            parsed.username = decodeURIComponent(username);
        }
        if (password) {
            parsed.password = decodeURIComponent(password);
        }
        if (pathname.length > 1) {
            const database = Number(pathname.substring(1));
            if (isNaN(database)) {
                throw new TypeError('Invalid pathname');
            }
            parsed.database = database;
        }
        return parsed;
    }
    get options() {
        return __classPrivateFieldGet(this, _RedisClient_options, "f");
    }
    get isOpen() {
        return __classPrivateFieldGet(this, _RedisClient_socket, "f").isOpen;
    }
    get isReady() {
        return __classPrivateFieldGet(this, _RedisClient_socket, "f").isReady;
    }
    get isPubSubActive() {
        return __classPrivateFieldGet(this, _RedisClient_queue, "f").isPubSubActive;
    }
    get v4() {
        var __classPrivateFieldGet1;
        if (!((__classPrivateFieldGet1 = __classPrivateFieldGet(this, _RedisClient_options, "f")) === null || __classPrivateFieldGet1 === void 0 ? void 0 : __classPrivateFieldGet1.legacyMode)) {
            throw new Error('the client is not in "legacy mode"');
        }
        return __classPrivateFieldGet(this, _RedisClient_v4, "f");
    }
    duplicate(overrides) {
        return new (Object.getPrototypeOf(this)).constructor({
            ...__classPrivateFieldGet(this, _RedisClient_options, "f"),
            ...overrides
        });
    }
    async connect() {
        var __classPrivateFieldGet1;
        // see comment in constructor
        __classPrivateFieldSet(this, _RedisClient_isolationPool, (__classPrivateFieldGet1 = __classPrivateFieldGet(this, _RedisClient_isolationPool, "f")) !== null && __classPrivateFieldGet1 !== void 0 ? __classPrivateFieldGet1 : __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_initiateIsolationPool).call(this), "f");
        await __classPrivateFieldGet(this, _RedisClient_socket, "f").connect();
        return this;
    }
    async commandsExecutor(command, args) {
        const { args: redisArgs, options } = (0, commander_1.transformCommandArguments)(command, args);
        return (0, commander_1.transformCommandReply)(command, await __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, redisArgs, options), redisArgs.preserve);
    }
    sendCommand(args, options) {
        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, args, options);
    }
    async functionsExecuter(fn, args, name) {
        const { args: redisArgs, options } = (0, commander_1.transformCommandArguments)(fn, args);
        return (0, commander_1.transformCommandReply)(fn, await this.executeFunction(name, fn, redisArgs, options), redisArgs.preserve);
    }
    executeFunction(name, fn, args, options) {
        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, (0, commander_1.fCallArguments)(name, fn, args), options);
    }
    async scriptsExecuter(script, args) {
        const { args: redisArgs, options } = (0, commander_1.transformCommandArguments)(script, args);
        return (0, commander_1.transformCommandReply)(script, await this.executeScript(script, redisArgs, options), redisArgs.preserve);
    }
    async executeScript(script, args, options) {
        const redisArgs = [
            'EVALSHA',
            script.SHA1
        ];
        if (script.NUMBER_OF_KEYS !== undefined) {
            redisArgs.push(script.NUMBER_OF_KEYS.toString());
        }
        redisArgs.push(...args);
        try {
            return await __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, redisArgs, options);
        } catch (err) {
            var _err_message_startsWith, _err_message;
            if (!(err === null || err === void 0 ? void 0 : (_err_message = err.message) === null || _err_message === void 0 ? void 0 : (_err_message_startsWith = _err_message.startsWith) === null || _err_message_startsWith === void 0 ? void 0 : _err_message_startsWith.call(_err_message, 'NOSCRIPT'))) {
                throw err;
            }
            redisArgs[0] = 'EVAL';
            redisArgs[1] = script.SCRIPT;
            return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, redisArgs, options);
        }
    }
    async SELECT(options, db) {
        if (!(0, command_options_1.isCommandOptions)(options)) {
            db = options;
            options = null;
        }
        await __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, [
            'SELECT',
            db.toString()
        ], options);
        __classPrivateFieldSet(this, _RedisClient_selectedDB, db, "f");
    }
    SUBSCRIBE(channels, listener, bufferMode) {
        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_pubSubCommand).call(this, __classPrivateFieldGet(this, _RedisClient_queue, "f").subscribe(pub_sub_1.PubSubType.CHANNELS, channels, listener, bufferMode));
    }
    UNSUBSCRIBE(channels, listener, bufferMode) {
        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_pubSubCommand).call(this, __classPrivateFieldGet(this, _RedisClient_queue, "f").unsubscribe(pub_sub_1.PubSubType.CHANNELS, channels, listener, bufferMode));
    }
    PSUBSCRIBE(patterns, listener, bufferMode) {
        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_pubSubCommand).call(this, __classPrivateFieldGet(this, _RedisClient_queue, "f").subscribe(pub_sub_1.PubSubType.PATTERNS, patterns, listener, bufferMode));
    }
    PUNSUBSCRIBE(patterns, listener, bufferMode) {
        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_pubSubCommand).call(this, __classPrivateFieldGet(this, _RedisClient_queue, "f").unsubscribe(pub_sub_1.PubSubType.PATTERNS, patterns, listener, bufferMode));
    }
    SSUBSCRIBE(channels, listener, bufferMode) {
        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_pubSubCommand).call(this, __classPrivateFieldGet(this, _RedisClient_queue, "f").subscribe(pub_sub_1.PubSubType.SHARDED, channels, listener, bufferMode));
    }
    SUNSUBSCRIBE(channels, listener, bufferMode) {
        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_pubSubCommand).call(this, __classPrivateFieldGet(this, _RedisClient_queue, "f").unsubscribe(pub_sub_1.PubSubType.SHARDED, channels, listener, bufferMode));
    }
    getPubSubListeners(type) {
        return __classPrivateFieldGet(this, _RedisClient_queue, "f").getPubSubListeners(type);
    }
    extendPubSubChannelListeners(type, channel, listeners) {
        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_pubSubCommand).call(this, __classPrivateFieldGet(this, _RedisClient_queue, "f").extendPubSubChannelListeners(type, channel, listeners));
    }
    extendPubSubListeners(type, listeners) {
        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_pubSubCommand).call(this, __classPrivateFieldGet(this, _RedisClient_queue, "f").extendPubSubListeners(type, listeners));
    }
    QUIT() {
        return __classPrivateFieldGet(this, _RedisClient_socket, "f").quit(async ()=>{
            if (__classPrivateFieldGet(this, _RedisClient_pingTimer, "f")) clearTimeout(__classPrivateFieldGet(this, _RedisClient_pingTimer, "f"));
            const quitPromise = __classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand([
                'QUIT'
            ]);
            __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_tick).call(this);
            const [reply] = await Promise.all([
                quitPromise,
                __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_destroyIsolationPool).call(this)
            ]);
            return reply;
        });
    }
    executeIsolated(fn) {
        if (!__classPrivateFieldGet(this, _RedisClient_isolationPool, "f")) return Promise.reject(new errors_1.ClientClosedError());
        return __classPrivateFieldGet(this, _RedisClient_isolationPool, "f").use(fn);
    }
    MULTI() {
        var __classPrivateFieldGet1;
        return new this.Multi(this.multiExecutor.bind(this), (__classPrivateFieldGet1 = __classPrivateFieldGet(this, _RedisClient_options, "f")) === null || __classPrivateFieldGet1 === void 0 ? void 0 : __classPrivateFieldGet1.legacyMode);
    }
    async multiExecutor(commands, selectedDB, chainId) {
        if (!__classPrivateFieldGet(this, _RedisClient_socket, "f").isOpen) {
            return Promise.reject(new errors_1.ClientClosedError());
        }
        const promise = chainId ? // if `chainId` has a value, it's a `MULTI` (and not "pipeline") - need to add the `MULTI` and `EXEC` commands
        Promise.all([
            __classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand([
                'MULTI'
            ], {
                chainId
            }),
            __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_addMultiCommands).call(this, commands, chainId),
            __classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand([
                'EXEC'
            ], {
                chainId
            })
        ]) : __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_addMultiCommands).call(this, commands);
        __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_tick).call(this);
        const results = await promise;
        if (selectedDB !== undefined) {
            __classPrivateFieldSet(this, _RedisClient_selectedDB, selectedDB, "f");
        }
        return results;
    }
    async *scanIterator(options) {
        let cursor = 0;
        do {
            const reply = await this.scan(cursor, options);
            cursor = reply.cursor;
            for (const key of reply.keys){
                yield key;
            }
        }while (cursor !== 0)
    }
    async *hScanIterator(key, options) {
        let cursor = 0;
        do {
            const reply = await this.hScan(key, cursor, options);
            cursor = reply.cursor;
            for (const tuple of reply.tuples){
                yield tuple;
            }
        }while (cursor !== 0)
    }
    async *hScanNoValuesIterator(key, options) {
        let cursor = 0;
        do {
            const reply = await this.hScanNoValues(key, cursor, options);
            cursor = reply.cursor;
            for (const k of reply.keys){
                yield k;
            }
        }while (cursor !== 0)
    }
    async *sScanIterator(key, options) {
        let cursor = 0;
        do {
            const reply = await this.sScan(key, cursor, options);
            cursor = reply.cursor;
            for (const member of reply.members){
                yield member;
            }
        }while (cursor !== 0)
    }
    async *zScanIterator(key, options) {
        let cursor = 0;
        do {
            const reply = await this.zScan(key, cursor, options);
            cursor = reply.cursor;
            for (const member of reply.members){
                yield member;
            }
        }while (cursor !== 0)
    }
    async disconnect() {
        if (__classPrivateFieldGet(this, _RedisClient_pingTimer, "f")) clearTimeout(__classPrivateFieldGet(this, _RedisClient_pingTimer, "f"));
        __classPrivateFieldGet(this, _RedisClient_queue, "f").flushAll(new errors_1.DisconnectsClientError());
        __classPrivateFieldGet(this, _RedisClient_socket, "f").disconnect();
        await __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_destroyIsolationPool).call(this);
    }
    ref() {
        __classPrivateFieldGet(this, _RedisClient_socket, "f").ref();
    }
    unref() {
        __classPrivateFieldGet(this, _RedisClient_socket, "f").unref();
    }
    constructor(options){
        super();
        _RedisClient_instances.add(this);
        Object.defineProperty(this, "commandOptions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _a.commandOptions
        });
        _RedisClient_options.set(this, void 0);
        _RedisClient_socket.set(this, void 0);
        _RedisClient_queue.set(this, void 0);
        _RedisClient_isolationPool.set(this, void 0);
        _RedisClient_v4.set(this, {});
        _RedisClient_selectedDB.set(this, 0);
        _RedisClient_pingTimer.set(this, void 0);
        Object.defineProperty(this, "select", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.SELECT
        });
        Object.defineProperty(this, "subscribe", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.SUBSCRIBE
        });
        Object.defineProperty(this, "unsubscribe", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.UNSUBSCRIBE
        });
        Object.defineProperty(this, "pSubscribe", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.PSUBSCRIBE
        });
        Object.defineProperty(this, "pUnsubscribe", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.PUNSUBSCRIBE
        });
        Object.defineProperty(this, "sSubscribe", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.SSUBSCRIBE
        });
        Object.defineProperty(this, "sUnsubscribe", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.SUNSUBSCRIBE
        });
        Object.defineProperty(this, "quit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.QUIT
        });
        Object.defineProperty(this, "multi", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.MULTI
        });
        __classPrivateFieldSet(this, _RedisClient_options, __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_initiateOptions).call(this, options), "f");
        __classPrivateFieldSet(this, _RedisClient_queue, __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_initiateQueue).call(this), "f");
        __classPrivateFieldSet(this, _RedisClient_socket, __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_initiateSocket).call(this), "f");
        // should be initiated in connect, not here
        // TODO: consider breaking in v5
        __classPrivateFieldSet(this, _RedisClient_isolationPool, __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_initiateIsolationPool).call(this), "f");
        __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_legacyMode).call(this);
    }
}
_a = RedisClient, _RedisClient_options = new WeakMap(), _RedisClient_socket = new WeakMap(), _RedisClient_queue = new WeakMap(), _RedisClient_isolationPool = new WeakMap(), _RedisClient_v4 = new WeakMap(), _RedisClient_selectedDB = new WeakMap(), _RedisClient_pingTimer = new WeakMap(), _RedisClient_instances = new WeakSet(), _RedisClient_initiateOptions = function _RedisClient_initiateOptions(options) {
    if (options === null || options === void 0 ? void 0 : options.url) {
        const parsed = _a.parseURL(options.url);
        if (options.socket) {
            parsed.socket = Object.assign(options.socket, parsed.socket);
        }
        Object.assign(options, parsed);
    }
    if (options === null || options === void 0 ? void 0 : options.database) {
        __classPrivateFieldSet(this, _RedisClient_selectedDB, options.database, "f");
    }
    return options;
}, _RedisClient_initiateQueue = function _RedisClient_initiateQueue() {
    var __classPrivateFieldGet1;
    return new commands_queue_1.default((__classPrivateFieldGet1 = __classPrivateFieldGet(this, _RedisClient_options, "f")) === null || __classPrivateFieldGet1 === void 0 ? void 0 : __classPrivateFieldGet1.commandsQueueMaxLength, (channel, listeners)=>this.emit('sharded-channel-moved', channel, listeners));
}, _RedisClient_initiateSocket = function _RedisClient_initiateSocket() {
    var __classPrivateFieldGet1;
    const socketInitiator = async ()=>{
        var __classPrivateFieldGet1, __classPrivateFieldGet2, __classPrivateFieldGet3, __classPrivateFieldGet4, __classPrivateFieldGet5;
        const promises = [];
        if (__classPrivateFieldGet(this, _RedisClient_selectedDB, "f") !== 0) {
            promises.push(__classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand([
                'SELECT',
                __classPrivateFieldGet(this, _RedisClient_selectedDB, "f").toString()
            ], {
                asap: true
            }));
        }
        if ((__classPrivateFieldGet1 = __classPrivateFieldGet(this, _RedisClient_options, "f")) === null || __classPrivateFieldGet1 === void 0 ? void 0 : __classPrivateFieldGet1.readonly) {
            promises.push(__classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(commands_1.default.READONLY.transformArguments(), {
                asap: true
            }));
        }
        if (!((__classPrivateFieldGet2 = __classPrivateFieldGet(this, _RedisClient_options, "f")) === null || __classPrivateFieldGet2 === void 0 ? void 0 : __classPrivateFieldGet2.disableClientInfo)) {
            var __classPrivateFieldGet6;
            promises.push(__classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand([
                'CLIENT',
                'SETINFO',
                'LIB-VER',
                package_json_1.version
            ], {
                asap: true
            }).catch((err)=>{
                if (!(err instanceof errors_1.ErrorReply)) {
                    throw err;
                }
            }));
            promises.push(__classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand([
                'CLIENT',
                'SETINFO',
                'LIB-NAME',
                ((__classPrivateFieldGet6 = __classPrivateFieldGet(this, _RedisClient_options, "f")) === null || __classPrivateFieldGet6 === void 0 ? void 0 : __classPrivateFieldGet6.clientInfoTag) ? "node-redis(".concat(__classPrivateFieldGet(this, _RedisClient_options, "f").clientInfoTag, ")") : 'node-redis'
            ], {
                asap: true
            }).catch((err)=>{
                if (!(err instanceof errors_1.ErrorReply)) {
                    throw err;
                }
            }));
        }
        if ((__classPrivateFieldGet3 = __classPrivateFieldGet(this, _RedisClient_options, "f")) === null || __classPrivateFieldGet3 === void 0 ? void 0 : __classPrivateFieldGet3.name) {
            promises.push(__classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(commands_1.default.CLIENT_SETNAME.transformArguments(__classPrivateFieldGet(this, _RedisClient_options, "f").name), {
                asap: true
            }));
        }
        if (((__classPrivateFieldGet4 = __classPrivateFieldGet(this, _RedisClient_options, "f")) === null || __classPrivateFieldGet4 === void 0 ? void 0 : __classPrivateFieldGet4.username) || ((__classPrivateFieldGet5 = __classPrivateFieldGet(this, _RedisClient_options, "f")) === null || __classPrivateFieldGet5 === void 0 ? void 0 : __classPrivateFieldGet5.password)) {
            var __classPrivateFieldGet_password;
            promises.push(__classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(commands_1.default.AUTH.transformArguments({
                username: __classPrivateFieldGet(this, _RedisClient_options, "f").username,
                password: (__classPrivateFieldGet_password = __classPrivateFieldGet(this, _RedisClient_options, "f").password) !== null && __classPrivateFieldGet_password !== void 0 ? __classPrivateFieldGet_password : ''
            }), {
                asap: true
            }));
        }
        const resubscribePromise = __classPrivateFieldGet(this, _RedisClient_queue, "f").resubscribe();
        if (resubscribePromise) {
            promises.push(resubscribePromise);
        }
        if (promises.length) {
            __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_tick).call(this, true);
            await Promise.all(promises);
        }
    };
    return new socket_1.default(socketInitiator, (__classPrivateFieldGet1 = __classPrivateFieldGet(this, _RedisClient_options, "f")) === null || __classPrivateFieldGet1 === void 0 ? void 0 : __classPrivateFieldGet1.socket).on('data', (chunk)=>__classPrivateFieldGet(this, _RedisClient_queue, "f").onReplyChunk(chunk)).on('error', (err)=>{
        var __classPrivateFieldGet1;
        this.emit('error', err);
        if (__classPrivateFieldGet(this, _RedisClient_socket, "f").isOpen && !((__classPrivateFieldGet1 = __classPrivateFieldGet(this, _RedisClient_options, "f")) === null || __classPrivateFieldGet1 === void 0 ? void 0 : __classPrivateFieldGet1.disableOfflineQueue)) {
            __classPrivateFieldGet(this, _RedisClient_queue, "f").flushWaitingForReply(err);
        } else {
            __classPrivateFieldGet(this, _RedisClient_queue, "f").flushAll(err);
        }
    }).on('connect', ()=>{
        this.emit('connect');
    }).on('ready', ()=>{
        this.emit('ready');
        __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_setPingTimer).call(this);
        __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_tick).call(this);
    }).on('reconnecting', ()=>this.emit('reconnecting')).on('drain', ()=>__classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_tick).call(this)).on('end', ()=>this.emit('end'));
}, _RedisClient_initiateIsolationPool = function _RedisClient_initiateIsolationPool() {
    var __classPrivateFieldGet1;
    return (0, generic_pool_1.createPool)({
        create: async ()=>{
            const duplicate = this.duplicate({
                isolationPoolOptions: undefined
            }).on('error', (err)=>this.emit('error', err));
            await duplicate.connect();
            return duplicate;
        },
        destroy: (client)=>client.disconnect()
    }, (__classPrivateFieldGet1 = __classPrivateFieldGet(this, _RedisClient_options, "f")) === null || __classPrivateFieldGet1 === void 0 ? void 0 : __classPrivateFieldGet1.isolationPoolOptions);
}, _RedisClient_legacyMode = function _RedisClient_legacyMode() {
    var _this = this;
    var __classPrivateFieldGet1;
    var _b, _c;
    if (!((__classPrivateFieldGet1 = __classPrivateFieldGet(this, _RedisClient_options, "f")) === null || __classPrivateFieldGet1 === void 0 ? void 0 : __classPrivateFieldGet1.legacyMode)) return;
    __classPrivateFieldGet(this, _RedisClient_v4, "f").sendCommand = __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).bind(this);
    this.sendCommand = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        const result = __classPrivateFieldGet(_this, _RedisClient_instances, "m", _RedisClient_legacySendCommand).call(_this, ...args);
        if (result) {
            result.promise.then((reply)=>result.callback(null, reply)).catch((err)=>result.callback(err));
        }
    };
    for (const [name, command] of Object.entries(commands_1.default)){
        __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, name, command);
        var _;
        (_ = (_b = this)[_c = name.toLowerCase()]) !== null && _ !== void 0 ? _ : _b[_c] = this[name];
    }
    // hard coded commands
    __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'SELECT');
    __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'select');
    __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'SUBSCRIBE');
    __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'subscribe');
    __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'PSUBSCRIBE');
    __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'pSubscribe');
    __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'UNSUBSCRIBE');
    __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'unsubscribe');
    __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'PUNSUBSCRIBE');
    __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'pUnsubscribe');
    __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'QUIT');
    __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, 'quit');
}, _RedisClient_legacySendCommand = function _RedisClient_legacySendCommand() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    const callback = typeof args[args.length - 1] === 'function' ? args.pop() : undefined;
    const promise = __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, (0, commander_1.transformLegacyCommandArguments)(args));
    if (callback) return {
        promise,
        callback
    };
    promise.catch((err)=>this.emit('error', err));
}, _RedisClient_defineLegacyCommand = function _RedisClient_defineLegacyCommand(name, command) {
    var _this = this;
    __classPrivateFieldGet(this, _RedisClient_v4, "f")[name] = this[name].bind(this);
    this[name] = command && command.TRANSFORM_LEGACY_REPLY && command.transformReply ? function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        const result = __classPrivateFieldGet(_this, _RedisClient_instances, "m", _RedisClient_legacySendCommand).call(_this, name, ...args);
        if (result) {
            result.promise.then((reply)=>result.callback(null, command.transformReply(reply))).catch((err)=>result.callback(err));
        }
    } : function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return _this.sendCommand(name, ...args);
    };
}, _RedisClient_setPingTimer = function _RedisClient_setPingTimer() {
    var __classPrivateFieldGet1;
    if (!((__classPrivateFieldGet1 = __classPrivateFieldGet(this, _RedisClient_options, "f")) === null || __classPrivateFieldGet1 === void 0 ? void 0 : __classPrivateFieldGet1.pingInterval) || !__classPrivateFieldGet(this, _RedisClient_socket, "f").isReady) return;
    clearTimeout(__classPrivateFieldGet(this, _RedisClient_pingTimer, "f"));
    __classPrivateFieldSet(this, _RedisClient_pingTimer, setTimeout(()=>{
        if (!__classPrivateFieldGet(this, _RedisClient_socket, "f").isReady) return;
        // using #sendCommand to support legacy mode
        __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, [
            'PING'
        ]).then((reply)=>this.emit('ping-interval', reply)).catch((err)=>this.emit('error', err)).finally(()=>__classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_setPingTimer).call(this));
    }, __classPrivateFieldGet(this, _RedisClient_options, "f").pingInterval), "f");
}, _RedisClient_sendCommand = function _RedisClient_sendCommand(args, options) {
    var __classPrivateFieldGet1;
    if (!__classPrivateFieldGet(this, _RedisClient_socket, "f").isOpen) {
        return Promise.reject(new errors_1.ClientClosedError());
    } else if (options === null || options === void 0 ? void 0 : options.isolated) {
        return this.executeIsolated((isolatedClient)=>isolatedClient.sendCommand(args, {
                ...options,
                isolated: false
            }));
    } else if (!__classPrivateFieldGet(this, _RedisClient_socket, "f").isReady && ((__classPrivateFieldGet1 = __classPrivateFieldGet(this, _RedisClient_options, "f")) === null || __classPrivateFieldGet1 === void 0 ? void 0 : __classPrivateFieldGet1.disableOfflineQueue)) {
        return Promise.reject(new errors_1.ClientOfflineError());
    }
    const promise = __classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(args, options);
    __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_tick).call(this);
    return promise;
}, _RedisClient_pubSubCommand = function _RedisClient_pubSubCommand(promise) {
    if (promise === undefined) return Promise.resolve();
    __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_tick).call(this);
    return promise;
}, _RedisClient_tick = function _RedisClient_tick() {
    let force = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    if (__classPrivateFieldGet(this, _RedisClient_socket, "f").writableNeedDrain || !force && !__classPrivateFieldGet(this, _RedisClient_socket, "f").isReady) {
        return;
    }
    __classPrivateFieldGet(this, _RedisClient_socket, "f").cork();
    while(!__classPrivateFieldGet(this, _RedisClient_socket, "f").writableNeedDrain){
        const args = __classPrivateFieldGet(this, _RedisClient_queue, "f").getCommandToSend();
        if (args === undefined) break;
        __classPrivateFieldGet(this, _RedisClient_socket, "f").writeCommand(args);
    }
}, _RedisClient_addMultiCommands = function _RedisClient_addMultiCommands(commands, chainId) {
    return Promise.all(commands.map((param)=>{
        let { args } = param;
        return __classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(args, {
            chainId
        });
    }));
}, _RedisClient_destroyIsolationPool = async function _RedisClient_destroyIsolationPool() {
    await __classPrivateFieldGet(this, _RedisClient_isolationPool, "f").drain();
    await __classPrivateFieldGet(this, _RedisClient_isolationPool, "f").clear();
    __classPrivateFieldSet(this, _RedisClient_isolationPool, undefined, "f");
};
exports.default = RedisClient;
(0, commander_1.attachCommands)({
    BaseClass: RedisClient,
    commands: commands_1.default,
    executor: RedisClient.prototype.commandsExecutor
});
RedisClient.prototype.Multi = multi_command_1.default;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/cluster/cluster-slots.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __classPrivateFieldGet = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _RedisClusterSlots_instances, _a, _RedisClusterSlots_SLOTS, _RedisClusterSlots_options, _RedisClusterSlots_Client, _RedisClusterSlots_emit, _RedisClusterSlots_isOpen, _RedisClusterSlots_discoverWithRootNodes, _RedisClusterSlots_resetSlots, _RedisClusterSlots_discover, _RedisClusterSlots_getShards, _RedisClusterSlots_getNodeAddress, _RedisClusterSlots_clientOptionsDefaults, _RedisClusterSlots_initiateSlotNode, _RedisClusterSlots_createClient, _RedisClusterSlots_createNodeClient, _RedisClusterSlots_runningRediscoverPromise, _RedisClusterSlots_rediscover, _RedisClusterSlots_destroy, _RedisClusterSlots_execOnNodeClient, _RedisClusterSlots_iterateAllNodes, _RedisClusterSlots_randomNodeIterator, _RedisClusterSlots_slotNodesIterator, _RedisClusterSlots_initiatePubSubClient, _RedisClusterSlots_initiateShardedPubSubClient;
Object.defineProperty(exports, "__esModule", {
    value: true
});
const client_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/client/index.js [app-client] (ecmascript)");
const errors_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/errors.js [app-client] (ecmascript)");
const util_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/next/dist/compiled/util/util.js [app-client] (ecmascript)");
const pub_sub_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/client/pub-sub.js [app-client] (ecmascript)");
// We need to use 'require', because it's not possible with Typescript to import
// function that are exported as 'module.exports = function`, without esModuleInterop
// set to true.
const calculateSlot = __turbopack_context__.r("[project]/dawg-ai/node_modules/cluster-key-slot/lib/index.js [app-client] (ecmascript)");
class RedisClusterSlots {
    get isOpen() {
        return __classPrivateFieldGet(this, _RedisClusterSlots_isOpen, "f");
    }
    async connect() {
        if (__classPrivateFieldGet(this, _RedisClusterSlots_isOpen, "f")) {
            throw new Error('Cluster already open');
        }
        __classPrivateFieldSet(this, _RedisClusterSlots_isOpen, true, "f");
        try {
            await __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_discoverWithRootNodes).call(this);
        } catch (err) {
            __classPrivateFieldSet(this, _RedisClusterSlots_isOpen, false, "f");
            throw err;
        }
    }
    nodeClient(node) {
        var _node_client;
        return (_node_client = node.client) !== null && _node_client !== void 0 ? _node_client : __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_createNodeClient).call(this, node);
    }
    async rediscover(startWith) {
        var __classPrivateFieldGet1;
        __classPrivateFieldSet(this, _RedisClusterSlots_runningRediscoverPromise, (__classPrivateFieldGet1 = __classPrivateFieldGet(this, _RedisClusterSlots_runningRediscoverPromise, "f")) !== null && __classPrivateFieldGet1 !== void 0 ? __classPrivateFieldGet1 : __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_rediscover).call(this, startWith).finally(()=>__classPrivateFieldSet(this, _RedisClusterSlots_runningRediscoverPromise, undefined, "f")), "f");
        return __classPrivateFieldGet(this, _RedisClusterSlots_runningRediscoverPromise, "f");
    }
    quit() {
        return __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_destroy).call(this, (client)=>client.quit());
    }
    disconnect() {
        return __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_destroy).call(this, (client)=>client.disconnect());
    }
    getClient(firstKey, isReadonly) {
        if (!firstKey) {
            return this.nodeClient(this.getRandomNode());
        }
        const slotNumber = calculateSlot(firstKey);
        if (!isReadonly) {
            return this.nodeClient(this.slots[slotNumber].master);
        }
        return this.nodeClient(this.getSlotRandomNode(slotNumber));
    }
    getRandomNode() {
        var __classPrivateFieldGet1;
        __classPrivateFieldSet(this, _RedisClusterSlots_randomNodeIterator, (__classPrivateFieldGet1 = __classPrivateFieldGet(this, _RedisClusterSlots_randomNodeIterator, "f")) !== null && __classPrivateFieldGet1 !== void 0 ? __classPrivateFieldGet1 : __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_iterateAllNodes).call(this), "f");
        return __classPrivateFieldGet(this, _RedisClusterSlots_randomNodeIterator, "f").next().value;
    }
    getSlotRandomNode(slotNumber) {
        var _slot_replicas;
        const slot = this.slots[slotNumber];
        if (!((_slot_replicas = slot.replicas) === null || _slot_replicas === void 0 ? void 0 : _slot_replicas.length)) {
            return slot.master;
        }
        var _slot_nodesIterator;
        (_slot_nodesIterator = slot.nodesIterator) !== null && _slot_nodesIterator !== void 0 ? _slot_nodesIterator : slot.nodesIterator = __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_slotNodesIterator).call(this, slot);
        return slot.nodesIterator.next().value;
    }
    getMasterByAddress(address) {
        const master = this.nodeByAddress.get(address);
        if (!master) return;
        return this.nodeClient(master);
    }
    getPubSubClient() {
        return this.pubSubNode ? this.pubSubNode.client : __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_initiatePubSubClient).call(this);
    }
    async executeUnsubscribeCommand(unsubscribe) {
        const client = await this.getPubSubClient();
        await unsubscribe(client);
        if (!client.isPubSubActive && client.isOpen) {
            await client.disconnect();
            this.pubSubNode = undefined;
        }
    }
    getShardedPubSubClient(channel) {
        const { master } = this.slots[calculateSlot(channel)];
        var _master_pubSubClient;
        return (_master_pubSubClient = master.pubSubClient) !== null && _master_pubSubClient !== void 0 ? _master_pubSubClient : __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_initiateShardedPubSubClient).call(this, master);
    }
    async executeShardedUnsubscribeCommand(channel, unsubscribe) {
        const { master } = this.slots[calculateSlot(channel)];
        if (!master.pubSubClient) return Promise.resolve();
        const client = await master.pubSubClient;
        await unsubscribe(client);
        if (!client.isPubSubActive && client.isOpen) {
            await client.disconnect();
            master.pubSubClient = undefined;
        }
    }
    constructor(options, emit){
        _RedisClusterSlots_instances.add(this);
        _RedisClusterSlots_options.set(this, void 0);
        _RedisClusterSlots_Client.set(this, void 0);
        _RedisClusterSlots_emit.set(this, void 0);
        Object.defineProperty(this, "slots", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Array(__classPrivateFieldGet(_a, _a, "f", _RedisClusterSlots_SLOTS))
        });
        Object.defineProperty(this, "shards", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Array()
        });
        Object.defineProperty(this, "masters", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Array()
        });
        Object.defineProperty(this, "replicas", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Array()
        });
        Object.defineProperty(this, "nodeByAddress", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
        Object.defineProperty(this, "pubSubNode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _RedisClusterSlots_isOpen.set(this, false);
        _RedisClusterSlots_runningRediscoverPromise.set(this, void 0);
        _RedisClusterSlots_randomNodeIterator.set(this, void 0);
        __classPrivateFieldSet(this, _RedisClusterSlots_options, options, "f");
        __classPrivateFieldSet(this, _RedisClusterSlots_Client, client_1.default.extend(options), "f");
        __classPrivateFieldSet(this, _RedisClusterSlots_emit, emit, "f");
    }
}
_a = RedisClusterSlots, _RedisClusterSlots_options = new WeakMap(), _RedisClusterSlots_Client = new WeakMap(), _RedisClusterSlots_emit = new WeakMap(), _RedisClusterSlots_isOpen = new WeakMap(), _RedisClusterSlots_runningRediscoverPromise = new WeakMap(), _RedisClusterSlots_randomNodeIterator = new WeakMap(), _RedisClusterSlots_instances = new WeakSet(), _RedisClusterSlots_discoverWithRootNodes = async function _RedisClusterSlots_discoverWithRootNodes() {
    let start = Math.floor(Math.random() * __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").rootNodes.length);
    for(let i = start; i < __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").rootNodes.length; i++){
        if (await __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_discover).call(this, __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").rootNodes[i])) return;
    }
    for(let i = 0; i < start; i++){
        if (await __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_discover).call(this, __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").rootNodes[i])) return;
    }
    throw new errors_1.RootNodesUnavailableError();
}, _RedisClusterSlots_resetSlots = function _RedisClusterSlots_resetSlots() {
    this.slots = new Array(__classPrivateFieldGet(_a, _a, "f", _RedisClusterSlots_SLOTS));
    this.shards = [];
    this.masters = [];
    this.replicas = [];
    __classPrivateFieldSet(this, _RedisClusterSlots_randomNodeIterator, undefined, "f");
}, _RedisClusterSlots_discover = async function _RedisClusterSlots_discover(rootNode) {
    const addressesInUse = new Set();
    try {
        const shards = await __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_getShards).call(this, rootNode), promises = [], eagerConnect = __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").minimizeConnections !== true;
        __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_resetSlots).call(this);
        for (const { from, to, master, replicas } of shards){
            const shard = {
                master: __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_initiateSlotNode).call(this, master, false, eagerConnect, addressesInUse, promises)
            };
            if (__classPrivateFieldGet(this, _RedisClusterSlots_options, "f").useReplicas) {
                shard.replicas = replicas.map((replica)=>__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_initiateSlotNode).call(this, replica, true, eagerConnect, addressesInUse, promises));
            }
            this.shards.push(shard);
            for(let i = from; i <= to; i++){
                this.slots[i] = shard;
            }
        }
        if (this.pubSubNode && !addressesInUse.has(this.pubSubNode.address)) {
            if (util_1.types.isPromise(this.pubSubNode.client)) {
                promises.push(this.pubSubNode.client.then((client)=>client.disconnect()));
                this.pubSubNode = undefined;
            } else {
                promises.push(this.pubSubNode.client.disconnect());
                const channelsListeners = this.pubSubNode.client.getPubSubListeners(pub_sub_1.PubSubType.CHANNELS), patternsListeners = this.pubSubNode.client.getPubSubListeners(pub_sub_1.PubSubType.PATTERNS);
                if (channelsListeners.size || patternsListeners.size) {
                    promises.push(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_initiatePubSubClient).call(this, {
                        [pub_sub_1.PubSubType.CHANNELS]: channelsListeners,
                        [pub_sub_1.PubSubType.PATTERNS]: patternsListeners
                    }));
                }
            }
        }
        for (const [address, node] of this.nodeByAddress.entries()){
            if (addressesInUse.has(address)) continue;
            if (node.client) {
                promises.push(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_execOnNodeClient).call(this, node.client, (client)=>client.disconnect()));
            }
            const { pubSubClient } = node;
            if (pubSubClient) {
                promises.push(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_execOnNodeClient).call(this, pubSubClient, (client)=>client.disconnect()));
            }
            this.nodeByAddress.delete(address);
        }
        await Promise.all(promises);
        return true;
    } catch (err) {
        __classPrivateFieldGet(this, _RedisClusterSlots_emit, "f").call(this, 'error', err);
        return false;
    }
}, _RedisClusterSlots_getShards = async function _RedisClusterSlots_getShards(rootNode) {
    const client = new (__classPrivateFieldGet(this, _RedisClusterSlots_Client, "f"))(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_clientOptionsDefaults).call(this, rootNode, true));
    client.on('error', (err)=>__classPrivateFieldGet(this, _RedisClusterSlots_emit, "f").call(this, 'error', err));
    await client.connect();
    try {
        // using `CLUSTER SLOTS` and not `CLUSTER SHARDS` to support older versions
        return await client.clusterSlots();
    } finally{
        await client.disconnect();
    }
}, _RedisClusterSlots_getNodeAddress = function _RedisClusterSlots_getNodeAddress(address) {
    switch(typeof __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").nodeAddressMap){
        case 'object':
            return __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").nodeAddressMap[address];
        case 'function':
            return __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").nodeAddressMap(address);
    }
}, _RedisClusterSlots_clientOptionsDefaults = function _RedisClusterSlots_clientOptionsDefaults(options, disableReconnect) {
    let result;
    if (__classPrivateFieldGet(this, _RedisClusterSlots_options, "f").defaults) {
        let socket;
        if (__classPrivateFieldGet(this, _RedisClusterSlots_options, "f").defaults.socket) {
            socket = {
                ...__classPrivateFieldGet(this, _RedisClusterSlots_options, "f").defaults.socket,
                ...options === null || options === void 0 ? void 0 : options.socket
            };
        } else {
            socket = options === null || options === void 0 ? void 0 : options.socket;
        }
        result = {
            ...__classPrivateFieldGet(this, _RedisClusterSlots_options, "f").defaults,
            ...options,
            socket
        };
    } else {
        result = options;
    }
    if (disableReconnect) {
        result !== null && result !== void 0 ? result : result = {};
        var _result_socket;
        (_result_socket = result.socket) !== null && _result_socket !== void 0 ? _result_socket : result.socket = {};
        result.socket.reconnectStrategy = false;
    }
    return result;
}, _RedisClusterSlots_initiateSlotNode = function _RedisClusterSlots_initiateSlotNode(param, readonly, eagerConnent, addressesInUse, promises) {
    let { id, ip, port } = param;
    const address = "".concat(ip, ":").concat(port);
    addressesInUse.add(address);
    let node = this.nodeByAddress.get(address);
    if (!node) {
        node = {
            id,
            host: ip,
            port,
            address,
            readonly,
            client: undefined
        };
        if (eagerConnent) {
            promises.push(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_createNodeClient).call(this, node));
        }
        this.nodeByAddress.set(address, node);
    }
    (readonly ? this.replicas : this.masters).push(node);
    return node;
}, _RedisClusterSlots_createClient = async function _RedisClusterSlots_createClient(node) {
    let readonly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : node.readonly;
    var __classPrivateFieldGet_call;
    const client = new (__classPrivateFieldGet(this, _RedisClusterSlots_Client, "f"))(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_clientOptionsDefaults).call(this, {
        socket: (__classPrivateFieldGet_call = __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_getNodeAddress).call(this, node.address)) !== null && __classPrivateFieldGet_call !== void 0 ? __classPrivateFieldGet_call : {
            host: node.host,
            port: node.port
        },
        readonly
    }));
    client.on('error', (err)=>__classPrivateFieldGet(this, _RedisClusterSlots_emit, "f").call(this, 'error', err));
    await client.connect();
    return client;
}, _RedisClusterSlots_createNodeClient = function _RedisClusterSlots_createNodeClient(node) {
    const promise = __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_createClient).call(this, node).then((client)=>{
        node.client = client;
        return client;
    }).catch((err)=>{
        node.client = undefined;
        throw err;
    });
    node.client = promise;
    return promise;
}, _RedisClusterSlots_rediscover = async function _RedisClusterSlots_rediscover(startWith) {
    if (await __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_discover).call(this, startWith.options)) return;
    return __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_discoverWithRootNodes).call(this);
}, _RedisClusterSlots_destroy = async function _RedisClusterSlots_destroy(fn) {
    __classPrivateFieldSet(this, _RedisClusterSlots_isOpen, false, "f");
    const promises = [];
    for (const { master, replicas } of this.shards){
        if (master.client) {
            promises.push(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_execOnNodeClient).call(this, master.client, fn));
        }
        if (master.pubSubClient) {
            promises.push(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_execOnNodeClient).call(this, master.pubSubClient, fn));
        }
        if (replicas) {
            for (const { client } of replicas){
                if (client) {
                    promises.push(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_execOnNodeClient).call(this, client, fn));
                }
            }
        }
    }
    if (this.pubSubNode) {
        promises.push(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_execOnNodeClient).call(this, this.pubSubNode.client, fn));
        this.pubSubNode = undefined;
    }
    __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_resetSlots).call(this);
    this.nodeByAddress.clear();
    await Promise.allSettled(promises);
}, _RedisClusterSlots_execOnNodeClient = function _RedisClusterSlots_execOnNodeClient(client, fn) {
    return util_1.types.isPromise(client) ? client.then(fn) : fn(client);
}, _RedisClusterSlots_iterateAllNodes = function* _RedisClusterSlots_iterateAllNodes() {
    let i = Math.floor(Math.random() * (this.masters.length + this.replicas.length));
    if (i < this.masters.length) {
        do {
            yield this.masters[i];
        }while (++i < this.masters.length)
        for (const replica of this.replicas){
            yield replica;
        }
    } else {
        i -= this.masters.length;
        do {
            yield this.replicas[i];
        }while (++i < this.replicas.length)
    }
    while(true){
        for (const master of this.masters){
            yield master;
        }
        for (const replica of this.replicas){
            yield replica;
        }
    }
}, _RedisClusterSlots_slotNodesIterator = function* _RedisClusterSlots_slotNodesIterator(slot) {
    let i = Math.floor(Math.random() * (1 + slot.replicas.length));
    if (i < slot.replicas.length) {
        do {
            yield slot.replicas[i];
        }while (++i < slot.replicas.length)
    }
    while(true){
        yield slot.master;
        for (const replica of slot.replicas){
            yield replica;
        }
    }
}, _RedisClusterSlots_initiatePubSubClient = async function _RedisClusterSlots_initiatePubSubClient(toResubscribe) {
    const index = Math.floor(Math.random() * (this.masters.length + this.replicas.length)), node = index < this.masters.length ? this.masters[index] : this.replicas[index - this.masters.length];
    this.pubSubNode = {
        address: node.address,
        client: __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_createClient).call(this, node, false).then(async (client)=>{
            if (toResubscribe) {
                await Promise.all([
                    client.extendPubSubListeners(pub_sub_1.PubSubType.CHANNELS, toResubscribe[pub_sub_1.PubSubType.CHANNELS]),
                    client.extendPubSubListeners(pub_sub_1.PubSubType.PATTERNS, toResubscribe[pub_sub_1.PubSubType.PATTERNS])
                ]);
            }
            this.pubSubNode.client = client;
            return client;
        }).catch((err)=>{
            this.pubSubNode = undefined;
            throw err;
        })
    };
    return this.pubSubNode.client;
}, _RedisClusterSlots_initiateShardedPubSubClient = function _RedisClusterSlots_initiateShardedPubSubClient(master) {
    const promise = __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_createClient).call(this, master, false).then((client)=>{
        client.on('server-sunsubscribe', async (channel, listeners)=>{
            try {
                await this.rediscover(client);
                const redirectTo = await this.getShardedPubSubClient(channel);
                redirectTo.extendPubSubChannelListeners(pub_sub_1.PubSubType.SHARDED, channel, listeners);
            } catch (err) {
                __classPrivateFieldGet(this, _RedisClusterSlots_emit, "f").call(this, 'sharded-shannel-moved-error', err, channel, listeners);
            }
        });
        master.pubSubClient = client;
        return client;
    }).catch((err)=>{
        master.pubSubClient = undefined;
        throw err;
    });
    master.pubSubClient = promise;
    return promise;
};
_RedisClusterSlots_SLOTS = {
    value: 16384
};
exports.default = RedisClusterSlots;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/cluster/multi-command.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __classPrivateFieldSet = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _RedisClusterMultiCommand_multi, _RedisClusterMultiCommand_executor, _RedisClusterMultiCommand_firstKey;
Object.defineProperty(exports, "__esModule", {
    value: true
});
const commands_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/cluster/commands.js [app-client] (ecmascript)");
const multi_command_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/multi-command.js [app-client] (ecmascript)");
const commander_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commander.js [app-client] (ecmascript)");
const _1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/cluster/index.js [app-client] (ecmascript)");
class RedisClusterMultiCommand {
    static extend(extensions) {
        return (0, commander_1.attachExtensions)({
            BaseClass: RedisClusterMultiCommand,
            modulesExecutor: RedisClusterMultiCommand.prototype.commandsExecutor,
            modules: extensions === null || extensions === void 0 ? void 0 : extensions.modules,
            functionsExecutor: RedisClusterMultiCommand.prototype.functionsExecutor,
            functions: extensions === null || extensions === void 0 ? void 0 : extensions.functions,
            scriptsExecutor: RedisClusterMultiCommand.prototype.scriptsExecutor,
            scripts: extensions === null || extensions === void 0 ? void 0 : extensions.scripts
        });
    }
    commandsExecutor(command, args) {
        const transformedArguments = command.transformArguments(...args);
        var __classPrivateFieldGet1;
        __classPrivateFieldSet(this, _RedisClusterMultiCommand_firstKey, (__classPrivateFieldGet1 = __classPrivateFieldGet(this, _RedisClusterMultiCommand_firstKey, "f")) !== null && __classPrivateFieldGet1 !== void 0 ? __classPrivateFieldGet1 : _1.default.extractFirstKey(command, args, transformedArguments), "f");
        return this.addCommand(undefined, transformedArguments, command.transformReply);
    }
    addCommand(firstKey, args, transformReply) {
        var __classPrivateFieldGet1;
        __classPrivateFieldSet(this, _RedisClusterMultiCommand_firstKey, (__classPrivateFieldGet1 = __classPrivateFieldGet(this, _RedisClusterMultiCommand_firstKey, "f")) !== null && __classPrivateFieldGet1 !== void 0 ? __classPrivateFieldGet1 : firstKey, "f");
        __classPrivateFieldGet(this, _RedisClusterMultiCommand_multi, "f").addCommand(args, transformReply);
        return this;
    }
    functionsExecutor(fn, args, name) {
        const transformedArguments = __classPrivateFieldGet(this, _RedisClusterMultiCommand_multi, "f").addFunction(name, fn, args);
        var __classPrivateFieldGet1;
        __classPrivateFieldSet(this, _RedisClusterMultiCommand_firstKey, (__classPrivateFieldGet1 = __classPrivateFieldGet(this, _RedisClusterMultiCommand_firstKey, "f")) !== null && __classPrivateFieldGet1 !== void 0 ? __classPrivateFieldGet1 : _1.default.extractFirstKey(fn, args, transformedArguments), "f");
        return this;
    }
    scriptsExecutor(script, args) {
        const transformedArguments = __classPrivateFieldGet(this, _RedisClusterMultiCommand_multi, "f").addScript(script, args);
        var __classPrivateFieldGet1;
        __classPrivateFieldSet(this, _RedisClusterMultiCommand_firstKey, (__classPrivateFieldGet1 = __classPrivateFieldGet(this, _RedisClusterMultiCommand_firstKey, "f")) !== null && __classPrivateFieldGet1 !== void 0 ? __classPrivateFieldGet1 : _1.default.extractFirstKey(script, args, transformedArguments), "f");
        return this;
    }
    async exec() {
        let execAsPipeline = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        if (execAsPipeline) {
            return this.execAsPipeline();
        }
        return __classPrivateFieldGet(this, _RedisClusterMultiCommand_multi, "f").handleExecReplies(await __classPrivateFieldGet(this, _RedisClusterMultiCommand_executor, "f").call(this, __classPrivateFieldGet(this, _RedisClusterMultiCommand_multi, "f").queue, __classPrivateFieldGet(this, _RedisClusterMultiCommand_firstKey, "f"), multi_command_1.default.generateChainId()));
    }
    async execAsPipeline() {
        return __classPrivateFieldGet(this, _RedisClusterMultiCommand_multi, "f").transformReplies(await __classPrivateFieldGet(this, _RedisClusterMultiCommand_executor, "f").call(this, __classPrivateFieldGet(this, _RedisClusterMultiCommand_multi, "f").queue, __classPrivateFieldGet(this, _RedisClusterMultiCommand_firstKey, "f")));
    }
    constructor(executor, firstKey){
        _RedisClusterMultiCommand_multi.set(this, new multi_command_1.default());
        _RedisClusterMultiCommand_executor.set(this, void 0);
        _RedisClusterMultiCommand_firstKey.set(this, void 0);
        Object.defineProperty(this, "EXEC", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.exec
        });
        __classPrivateFieldSet(this, _RedisClusterMultiCommand_executor, executor, "f");
        __classPrivateFieldSet(this, _RedisClusterMultiCommand_firstKey, firstKey, "f");
    }
}
_RedisClusterMultiCommand_multi = new WeakMap(), _RedisClusterMultiCommand_executor = new WeakMap(), _RedisClusterMultiCommand_firstKey = new WeakMap();
exports.default = RedisClusterMultiCommand;
(0, commander_1.attachCommands)({
    BaseClass: RedisClusterMultiCommand,
    commands: commands_1.default,
    executor: RedisClusterMultiCommand.prototype.commandsExecutor
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/cluster/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __classPrivateFieldGet = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _RedisCluster_instances, _RedisCluster_options, _RedisCluster_slots, _RedisCluster_Multi, _RedisCluster_execute;
Object.defineProperty(exports, "__esModule", {
    value: true
});
const commands_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/cluster/commands.js [app-client] (ecmascript)");
const cluster_slots_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/cluster/cluster-slots.js [app-client] (ecmascript)");
const commander_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commander.js [app-client] (ecmascript)");
const events_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/events/events.js [app-client] (ecmascript)");
const multi_command_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/cluster/multi-command.js [app-client] (ecmascript)");
const errors_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/errors.js [app-client] (ecmascript)");
class RedisCluster extends events_1.EventEmitter {
    static extractFirstKey(command, originalArgs, redisArgs) {
        if (command.FIRST_KEY_INDEX === undefined) {
            return undefined;
        } else if (typeof command.FIRST_KEY_INDEX === 'number') {
            return redisArgs[command.FIRST_KEY_INDEX];
        }
        return command.FIRST_KEY_INDEX(...originalArgs);
    }
    static create(options) {
        return new ((0, commander_1.attachExtensions)({
            BaseClass: RedisCluster,
            modulesExecutor: RedisCluster.prototype.commandsExecutor,
            modules: options === null || options === void 0 ? void 0 : options.modules,
            functionsExecutor: RedisCluster.prototype.functionsExecutor,
            functions: options === null || options === void 0 ? void 0 : options.functions,
            scriptsExecutor: RedisCluster.prototype.scriptsExecutor,
            scripts: options === null || options === void 0 ? void 0 : options.scripts
        }))(options);
    }
    get slots() {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").slots;
    }
    get shards() {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").shards;
    }
    get masters() {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").masters;
    }
    get replicas() {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").replicas;
    }
    get nodeByAddress() {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").nodeByAddress;
    }
    get pubSubNode() {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").pubSubNode;
    }
    get isOpen() {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").isOpen;
    }
    duplicate(overrides) {
        return new (Object.getPrototypeOf(this)).constructor({
            ...__classPrivateFieldGet(this, _RedisCluster_options, "f"),
            ...overrides
        });
    }
    connect() {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").connect();
    }
    async commandsExecutor(command, args) {
        const { jsArgs, args: redisArgs, options } = (0, commander_1.transformCommandArguments)(command, args);
        return (0, commander_1.transformCommandReply)(command, await this.sendCommand(RedisCluster.extractFirstKey(command, jsArgs, redisArgs), command.IS_READ_ONLY, redisArgs, options), redisArgs.preserve);
    }
    async sendCommand(firstKey, isReadonly, args, options) {
        return __classPrivateFieldGet(this, _RedisCluster_instances, "m", _RedisCluster_execute).call(this, firstKey, isReadonly, (client)=>client.sendCommand(args, options));
    }
    async functionsExecutor(fn, args, name) {
        const { args: redisArgs, options } = (0, commander_1.transformCommandArguments)(fn, args);
        return (0, commander_1.transformCommandReply)(fn, await this.executeFunction(name, fn, args, redisArgs, options), redisArgs.preserve);
    }
    async executeFunction(name, fn, originalArgs, redisArgs, options) {
        return __classPrivateFieldGet(this, _RedisCluster_instances, "m", _RedisCluster_execute).call(this, RedisCluster.extractFirstKey(fn, originalArgs, redisArgs), fn.IS_READ_ONLY, (client)=>client.executeFunction(name, fn, redisArgs, options));
    }
    async scriptsExecutor(script, args) {
        const { args: redisArgs, options } = (0, commander_1.transformCommandArguments)(script, args);
        return (0, commander_1.transformCommandReply)(script, await this.executeScript(script, args, redisArgs, options), redisArgs.preserve);
    }
    async executeScript(script, originalArgs, redisArgs, options) {
        return __classPrivateFieldGet(this, _RedisCluster_instances, "m", _RedisCluster_execute).call(this, RedisCluster.extractFirstKey(script, originalArgs, redisArgs), script.IS_READ_ONLY, (client)=>client.executeScript(script, redisArgs, options));
    }
    MULTI(routing) {
        return new (__classPrivateFieldGet(this, _RedisCluster_Multi, "f"))((commands, firstKey, chainId)=>{
            return __classPrivateFieldGet(this, _RedisCluster_instances, "m", _RedisCluster_execute).call(this, firstKey, false, (client)=>client.multiExecutor(commands, undefined, chainId));
        }, routing);
    }
    async SUBSCRIBE(channels, listener, bufferMode) {
        return (await __classPrivateFieldGet(this, _RedisCluster_slots, "f").getPubSubClient()).SUBSCRIBE(channels, listener, bufferMode);
    }
    async UNSUBSCRIBE(channels, listener, bufferMode) {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").executeUnsubscribeCommand((client)=>client.UNSUBSCRIBE(channels, listener, bufferMode));
    }
    async PSUBSCRIBE(patterns, listener, bufferMode) {
        return (await __classPrivateFieldGet(this, _RedisCluster_slots, "f").getPubSubClient()).PSUBSCRIBE(patterns, listener, bufferMode);
    }
    async PUNSUBSCRIBE(patterns, listener, bufferMode) {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").executeUnsubscribeCommand((client)=>client.PUNSUBSCRIBE(patterns, listener, bufferMode));
    }
    async SSUBSCRIBE(channels, listener, bufferMode) {
        var __classPrivateFieldGet_maxCommandRedirections;
        const maxCommandRedirections = (__classPrivateFieldGet_maxCommandRedirections = __classPrivateFieldGet(this, _RedisCluster_options, "f").maxCommandRedirections) !== null && __classPrivateFieldGet_maxCommandRedirections !== void 0 ? __classPrivateFieldGet_maxCommandRedirections : 16, firstChannel = Array.isArray(channels) ? channels[0] : channels;
        let client = await __classPrivateFieldGet(this, _RedisCluster_slots, "f").getShardedPubSubClient(firstChannel);
        for(let i = 0;; i++){
            try {
                return await client.SSUBSCRIBE(channels, listener, bufferMode);
            } catch (err) {
                if (++i > maxCommandRedirections || !(err instanceof errors_1.ErrorReply)) {
                    throw err;
                }
                if (err.message.startsWith('MOVED')) {
                    await __classPrivateFieldGet(this, _RedisCluster_slots, "f").rediscover(client);
                    client = await __classPrivateFieldGet(this, _RedisCluster_slots, "f").getShardedPubSubClient(firstChannel);
                    continue;
                }
                throw err;
            }
        }
    }
    SUNSUBSCRIBE(channels, listener, bufferMode) {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").executeShardedUnsubscribeCommand(Array.isArray(channels) ? channels[0] : channels, (client)=>client.SUNSUBSCRIBE(channels, listener, bufferMode));
    }
    quit() {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").quit();
    }
    disconnect() {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").disconnect();
    }
    nodeClient(node) {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").nodeClient(node);
    }
    getRandomNode() {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").getRandomNode();
    }
    getSlotRandomNode(slot) {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").getSlotRandomNode(slot);
    }
    /**
     * @deprecated use `.masters` instead
     */ getMasters() {
        return this.masters;
    }
    /**
     * @deprecated use `.slots[<SLOT>]` instead
     */ getSlotMaster(slot) {
        return this.slots[slot].master;
    }
    constructor(options){
        super();
        _RedisCluster_instances.add(this);
        _RedisCluster_options.set(this, void 0);
        _RedisCluster_slots.set(this, void 0);
        _RedisCluster_Multi.set(this, void 0);
        Object.defineProperty(this, "multi", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.MULTI
        });
        Object.defineProperty(this, "subscribe", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.SUBSCRIBE
        });
        Object.defineProperty(this, "unsubscribe", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.UNSUBSCRIBE
        });
        Object.defineProperty(this, "pSubscribe", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.PSUBSCRIBE
        });
        Object.defineProperty(this, "pUnsubscribe", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.PUNSUBSCRIBE
        });
        Object.defineProperty(this, "sSubscribe", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.SSUBSCRIBE
        });
        Object.defineProperty(this, "sUnsubscribe", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.SUNSUBSCRIBE
        });
        __classPrivateFieldSet(this, _RedisCluster_options, options, "f");
        __classPrivateFieldSet(this, _RedisCluster_slots, new cluster_slots_1.default(options, this.emit.bind(this)), "f");
        __classPrivateFieldSet(this, _RedisCluster_Multi, multi_command_1.default.extend(options), "f");
    }
}
_RedisCluster_options = new WeakMap(), _RedisCluster_slots = new WeakMap(), _RedisCluster_Multi = new WeakMap(), _RedisCluster_instances = new WeakSet(), _RedisCluster_execute = async function _RedisCluster_execute(firstKey, isReadonly, executor) {
    var __classPrivateFieldGet_maxCommandRedirections;
    const maxCommandRedirections = (__classPrivateFieldGet_maxCommandRedirections = __classPrivateFieldGet(this, _RedisCluster_options, "f").maxCommandRedirections) !== null && __classPrivateFieldGet_maxCommandRedirections !== void 0 ? __classPrivateFieldGet_maxCommandRedirections : 16;
    let client = await __classPrivateFieldGet(this, _RedisCluster_slots, "f").getClient(firstKey, isReadonly);
    for(let i = 0;; i++){
        try {
            return await executor(client);
        } catch (err) {
            if (++i > maxCommandRedirections || !(err instanceof errors_1.ErrorReply)) {
                throw err;
            }
            if (err.message.startsWith('ASK')) {
                const address = err.message.substring(err.message.lastIndexOf(' ') + 1);
                let redirectTo = await __classPrivateFieldGet(this, _RedisCluster_slots, "f").getMasterByAddress(address);
                if (!redirectTo) {
                    await __classPrivateFieldGet(this, _RedisCluster_slots, "f").rediscover(client);
                    redirectTo = await __classPrivateFieldGet(this, _RedisCluster_slots, "f").getMasterByAddress(address);
                }
                if (!redirectTo) {
                    throw new Error("Cannot find node ".concat(address));
                }
                await redirectTo.asking();
                client = redirectTo;
                continue;
            } else if (err.message.startsWith('MOVED')) {
                await __classPrivateFieldGet(this, _RedisCluster_slots, "f").rediscover(client);
                client = await __classPrivateFieldGet(this, _RedisCluster_slots, "f").getClient(firstKey, isReadonly);
                continue;
            }
            throw err;
        }
    }
};
exports.default = RedisCluster;
(0, commander_1.attachCommands)({
    BaseClass: RedisCluster,
    commands: commands_1.default,
    executor: RedisCluster.prototype.commandsExecutor
});
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/lib/lua-script.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scriptSha1 = exports.defineScript = void 0;
const crypto_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/next/dist/compiled/crypto-browserify/index.js [app-client] (ecmascript)");
function defineScript(script) {
    return {
        ...script,
        SHA1: scriptSha1(script.SCRIPT)
    };
}
exports.defineScript = defineScript;
function scriptSha1(script) {
    return (0, crypto_1.createHash)('sha1').update(script).digest('hex');
}
exports.scriptSha1 = scriptSha1;
}),
"[project]/dawg-ai/node_modules/@redis/client/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RedisFlushModes = exports.GeoReplyWith = exports.defineScript = exports.createCluster = exports.commandOptions = exports.createClient = void 0;
const client_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/client/index.js [app-client] (ecmascript)");
const cluster_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/cluster/index.js [app-client] (ecmascript)");
exports.createClient = client_1.default.create;
exports.commandOptions = client_1.default.commandOptions;
exports.createCluster = cluster_1.default.create;
var lua_script_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/lua-script.js [app-client] (ecmascript)");
Object.defineProperty(exports, "defineScript", {
    enumerable: true,
    get: function() {
        return lua_script_1.defineScript;
    }
});
__exportStar(__turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/errors.js [app-client] (ecmascript)"), exports);
var generic_transformers_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/generic-transformers.js [app-client] (ecmascript)");
Object.defineProperty(exports, "GeoReplyWith", {
    enumerable: true,
    get: function() {
        return generic_transformers_1.GeoReplyWith;
    }
});
var FLUSHALL_1 = __turbopack_context__.r("[project]/dawg-ai/node_modules/@redis/client/dist/lib/commands/FLUSHALL.js [app-client] (ecmascript)");
Object.defineProperty(exports, "RedisFlushModes", {
    enumerable: true,
    get: function() {
        return FLUSHALL_1.RedisFlushModes;
    }
});
}),
]);

//# sourceMappingURL=f2656_%40redis_client_dist_2d8d3ce9._.js.map