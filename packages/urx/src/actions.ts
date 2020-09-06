/**
 * urx Actions operate on streams - `publish` publishes data in a stream, and `subscribe` attaches a subscription to a stream.
 * @packageDocumentation
 */
import { PUBLISH, RESET, SUBSCRIBE, VALUE } from './constants'
import { curry2to1 } from './utils'

/**
 * A Publisher is the **input end** of a Stream. The [[publish]] action publishes values in publishers.
 * @typeParam T the type of values to be published.
 */
export interface Publisher<T> {
  /** @internal */
  (action: PUBLISH, value: T): void
}

/**
 * An Emitter is the **output end** of a Stream. The [[subscribe]] action binds {@link Subscription | subscriptions} to emitters.
 * @typeParam T the type of values that will be emitted.
 */
export interface Emitter<T> {
  /** @internal */
  (action: SUBSCRIBE, subscription: Subscription<T>): Unsubscribe
  /** @internal */
  (action: RESET): void
}

/**
 * Subscriptions are bound to Emitters with the [[subscribe]] action, and get called with the new values.
 * @typeParam T the Emitter value type.
 */
export interface Subscription<T> {
  (value: T): any
}

/**
 * Subscribe-like actions return unsubscribe handles of the Unsubscribe type, which, when called, unbind the subscription.
 */
export interface Unsubscribe {
  (): void
}

/**
 * Streams present both the input and the output ends of a stream.
 * A single stream instance can be both subscribed to and published in.
 */
export interface Stream<T> extends Publisher<T>, Emitter<T> {
  /** @internal */
  (action: SUBSCRIBE | PUBLISH | RESET): any // fix for bug with pipe + connect
}

/**
 * Just like {@link Stream | streams}, stateful streams present both input and output ends of a stream.
 * A single stream instance can be both subscribed to and published in.
 * Stateful Streams can also act like depots, preserving the last passed value and immediately publishing it to new subscriptions.
 * [[getValue]] can be used to extract value from stateful streams.
 */
export interface StatefulStream<T> extends Publisher<T>, Emitter<T> {
  /** @internal */
  (action: SUBSCRIBE | PUBLISH | RESET | VALUE): any // fix for bug with pipe + connect
  // StatefulStream should extend rather then duplicate the signature, but this somehow causes a bug in TS
}

/**
 * Subscribes the specified [[Subscription]] to the updates from the Emitter.
 */
export function subscribe<T>(emitter: Emitter<T>, subscription: Subscription<T>): Unsubscribe {
  return emitter(SUBSCRIBE, subscription)
}

/**
 * Publishes the passed value in the [[Publisher]].
 */
export function publish<T>(publisher: Publisher<T>, value: T) {
  publisher(PUBLISH, value)
}

/**
 * Clears all subscriptions from the [[Emitter]].
 */
export function reset(emitter: Emitter<any>) {
  emitter(RESET)
}

/**
 * Gets the value currently stored in the stateful stream.
 */
export function getValue<T>(depot: StatefulStream<T>): T {
  return depot(VALUE)
}

/**
 * Connects the two streams - any value emitted from the emitter will be published in the publisher.
 */
export function connect<T>(emitter: Emitter<T>, publisher: Publisher<T>) {
  return subscribe(emitter, curry2to1(publisher, PUBLISH))
}

/**
 * Executes the passed subscription at most once, for the next emit from the emitter.
 */
export function handleNext<T>(emitter: Emitter<T>, subscription: Subscription<T>) {
  const unsub = emitter(SUBSCRIBE, value => {
    unsub()
    subscription(value)
  })
  return unsub
}