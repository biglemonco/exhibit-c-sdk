# Exhibit C SDK (beta)

This mono repo contains many of the SDKs available for use with the [Exhibit C](https://www.exhibit-c.co.uk/) platform.

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

## Documentation

## Getting started

This SDK makes it easy to get working with the exhibit-c platform and allows you to log your activities.

### Requesting an invite

Before using the SDK, you must request an API key from your account. You can do that by visiting [app.exhibit-c.co.uk/organisation/developer](https://app.exhibit-c.co.uk/organisation/developer).
Once you have been approved, you can then start interacting with the SDK.

### Installing the SDK

```
yarn add @biglemonco/exhibit-c-sdk
```

## How to use

Once you have your API key, you can then start using the Exhibit-C SDK as follows.

## Initalise the SDK

```ts
const client = new EC({apiKey:<YOUR_KEY>});

```

## Get Activity by ID

To find out what inputs you need to provide the `createLog` method, you can use `getActivity` method

```ts
const activity = await client.getActivity('123');
```

## Get Activity by REF

During your account onboarding, we may have mapped the acitvity to an internal id you already use. If you would prefer to use that Id to find the activity, you can use the `getActivityByRef` method.

```ts
const activity = await client.getActivityByRef('123');
```

## Creating a log

When creating a log, you must provide us with the activity id and correctly tell us the inputs for that activity.

```ts
const activity = await client.getActivity('123');

const { inputs, id } = activity;

// Use the inputs array to validate you are providing all the requried data

const log = await client.createLog({
  startDate: '2020-01-01T00:00:00.000Z',
  endDate: '2020-01-01T00:00:00.000Z',
  activityId: id,
  inputs: {
    Tr: 1003,
  },
});
```

## Authors

- [@mikerudge](https://www.github.com/mikerudge)
