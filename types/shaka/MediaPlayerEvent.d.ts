declare namespace shaka {
  export type MediaPlayerEvent =
  | 'abrstatuschanged'
  | 'adaptation'
  | 'buffering'
  | 'complete'
  | 'downloadfailed'
  | 'downloadheadersreceived'
  | 'drmsessionupdate'
  | 'emsg'
  | 'error'
  | 'expirationupdated'
  | 'firstquartile'
  | 'gapjumped'
  | 'keystatuschanged'
  | 'loaded'
  | 'loading'
  | 'manifestparsed'
  | 'manifestupdated'
  | 'mediaqualitychanged'
  | 'metadata'
  | 'midpoint'
  | 'ratechange'
  | 'segmentappended'
  | 'sessiondata'
  | 'stalldetected'
  | 'started'
  | 'statechanged'
  | 'streaming'
  | 'textchanged'
  | 'texttrackvisibility'
  | 'thirdquartile'
  | 'timelineregionadded'
  | 'timelineregionenter'
  | 'timelineregionexit'
  | 'trackschanged'
  | 'unloading'
  | 'variantchanged';
}