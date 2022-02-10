import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "bf49edcd451449a6a336586cd56a7529";
const token =
  "006bf49edcd451449a6a336586cd56a7529IAD6x93j10sQKYn9688N/ZKEBzw+Es+rVNLJjr6o/iEV6fmX+pYAAAAAIgDL5xHfV34GYgQAAQBYfgZiAgBYfgZiAwBYfgZiBABYfgZi";

export const config = { mode: "rtc", codec: "h264", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "madhav";
