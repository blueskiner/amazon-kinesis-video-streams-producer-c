var group___public_structures =
[
    [ "__AwsCredentials", "struct_____aws_credentials.html", [
      [ "accessKeyId", "struct_____aws_credentials.html#ae0a4685443f3284cc1e35b4984a22102", null ],
      [ "accessKeyIdLen", "struct_____aws_credentials.html#abf61d815160fc0661133f0367fbf6d39", null ],
      [ "expiration", "struct_____aws_credentials.html#a55ff80438f0a12603e44ab1111267e5b", null ],
      [ "secretKey", "struct_____aws_credentials.html#abcd9a75259992e3c19d619c1ffc8129b", null ],
      [ "secretKeyLen", "struct_____aws_credentials.html#aecc3289426a3ca3b70d50d1d9eac0262", null ],
      [ "sessionToken", "struct_____aws_credentials.html#ab4848faefdd39ed299ed08c6ce8c8038", null ],
      [ "sessionTokenLen", "struct_____aws_credentials.html#a82944c35809b43c7bb43f2dda44c3f36", null ],
      [ "size", "struct_____aws_credentials.html#a39e4754273daf27918c408adb8729f32", null ],
      [ "version", "struct_____aws_credentials.html#a2d3315ebeab54ec2c5900c71da799d1c", null ]
    ] ],
    [ "__RequestHeader", "struct_____request_header.html", [
      [ "nameLen", "struct_____request_header.html#abe5d7b1b86c8dd75c16f58273eda14ed", null ],
      [ "pName", "struct_____request_header.html#a322e1b054ad4cc6d0b3c8110a8652880", null ],
      [ "pValue", "struct_____request_header.html#a1ff068d3a10fdbefb1b3fe0a3363d377", null ],
      [ "valueLen", "struct_____request_header.html#ad9c29c70aa60d829623af4b39bec160f", null ]
    ] ],
    [ "__RequestInfo", "struct_____request_info.html", [
      [ "body", "struct_____request_info.html#af6fd810eeccb82087b5f386b3d4fa81a", null ],
      [ "bodySize", "struct_____request_info.html#a319c9e104909739f90fa3eda17db364e", null ],
      [ "callAfter", "struct_____request_info.html#a131ab84fabcbf044e83fab795fb7245d", null ],
      [ "certPath", "struct_____request_info.html#ae78a985493dfff571c4c7628993aad3a", null ],
      [ "certType", "struct_____request_info.html#aafd45a7fcc034e982055b4192987e571", null ],
      [ "completionTimeout", "struct_____request_info.html#ab9b100fbda2e977a5e6d7dc2cc01292b", null ],
      [ "connectionTimeout", "struct_____request_info.html#a64f88571061816b898475c907fca86ee", null ],
      [ "currentTime", "struct_____request_info.html#a4079a6121356e0b3ada1949d53a1d964", null ],
      [ "lowSpeedLimit", "struct_____request_info.html#a99ee8340f95a151e73b84c9fd350b2bb", null ],
      [ "lowSpeedTimeLimit", "struct_____request_info.html#ab24114dede20dcef92b4f93dde722f66", null ],
      [ "pAwsCredentials", "struct_____request_info.html#a76d91a3f4cb2a9b5eaa9e04f7431a2fc", null ],
      [ "pRequestHeaders", "struct_____request_info.html#a202e403af1ed8778ded34baad2a0f2f7", null ],
      [ "region", "struct_____request_info.html#a8b3d52b06e3e1213db1e68cc18c267be", null ],
      [ "sslCertPath", "struct_____request_info.html#a44b60d70457b4228d26707ad590d63a4", null ],
      [ "sslPrivateKeyPath", "struct_____request_info.html#ac5a8eb4ef63c830e5b5a961bfcf105ae", null ],
      [ "terminating", "struct_____request_info.html#a3e740399d2856512c914bae1e8010f17", null ],
      [ "url", "struct_____request_info.html#abb64f8121a641baee33921f52d4a7335", null ],
      [ "verb", "struct_____request_info.html#a607fbced0dcec9c57a7dd22906747dfe", null ]
    ] ],
    [ "__CallInfo", "struct_____call_info.html", [
      [ "callResult", "struct_____call_info.html#a70ba8f0befa12d487804fafb6a134ee3", null ],
      [ "errorBuffer", "struct_____call_info.html#af08e4ad4380d4a19ebdfff509dd0af22", null ],
      [ "httpStatus", "struct_____call_info.html#af898c60f609086e7f7da64490462dfd2", null ],
      [ "pRequestId", "struct_____call_info.html#a7b30dacb676cbaca575ea0fa63812efb", null ],
      [ "pRequestInfo", "struct_____call_info.html#abdda6b3781185d2e5254afecea89cc4e", null ],
      [ "pResponseHeaders", "struct_____call_info.html#a2d5f61661548e70402cb24934536e6a6", null ],
      [ "responseData", "struct_____call_info.html#aac59c16afae53cee96b719e205338299", null ],
      [ "responseDataLen", "struct_____call_info.html#a7143cd88aca54761cd520435d928a6c7", null ]
    ] ],
    [ "__AwsCredentialProvider", "struct_____aws_credential_provider.html", [
      [ "getCredentialsFn", "struct_____aws_credential_provider.html#a6aa563362d1b3e4acfe2f03de3bb1c38", null ]
    ] ],
    [ "__PlatformCallbacks", "struct_____platform_callbacks.html", [
      [ "broadcastConditionVariableFn", "struct_____platform_callbacks.html#a49f122c13fa4d1c33b6ba97ed48529e8", null ],
      [ "createConditionVariableFn", "struct_____platform_callbacks.html#ad73d40ab3905d7945c721b07a13d668d", null ],
      [ "createMutexFn", "struct_____platform_callbacks.html#aec7f3576a89fdbe11f4406b2aafdaa72", null ],
      [ "customData", "struct_____platform_callbacks.html#aece4771eb401bdc4a8a133849ba25538", null ],
      [ "freeConditionVariableFn", "struct_____platform_callbacks.html#afe4bb7068450b9d82ded6b7446b6caa0", null ],
      [ "freeMutexFn", "struct_____platform_callbacks.html#a656a38b08603a7d52fd5e2437d4ef101", null ],
      [ "freePlatformCallbacksFn", "struct_____platform_callbacks.html#a959d58676b066d7a1e9e07dee384b912", null ],
      [ "getCurrentTimeFn", "struct_____platform_callbacks.html#ad1b430cb63d5f7fc06b432263464ef48", null ],
      [ "getRandomNumberFn", "struct_____platform_callbacks.html#a80dbf52dd62e3ba7f784bd2c2b2ca3ec", null ],
      [ "lockMutexFn", "struct_____platform_callbacks.html#a20314fe9e1b3368f026d08c95240cd36", null ],
      [ "logPrintFn", "struct_____platform_callbacks.html#a8275ae3cc29f353aadd555fce6ded3b1", null ],
      [ "signalConditionVariableFn", "struct_____platform_callbacks.html#af331233565dba155a78af75fdd68501d", null ],
      [ "tryLockMutexFn", "struct_____platform_callbacks.html#a48191593582fb36645e4b68713615f8d", null ],
      [ "unlockMutexFn", "struct_____platform_callbacks.html#a1209b61ccbe115b7eb56c7968082089b", null ],
      [ "version", "struct_____platform_callbacks.html#a0ea90656bb7557200190757815ff500d", null ],
      [ "waitConditionVariableFn", "struct_____platform_callbacks.html#a421774abbc3feeb6f25e55c83896437a", null ]
    ] ],
    [ "__ProducerCallbacks", "struct_____producer_callbacks.html", [
      [ "clientReadyFn", "struct_____producer_callbacks.html#a8083113470e33baa7e27e4d9737a8b9c", null ],
      [ "clientShutdownFn", "struct_____producer_callbacks.html#ac194e859eadc5e4d283eb3da53423e36", null ],
      [ "customData", "struct_____producer_callbacks.html#a6e023cbb050b0010052cfd574f96d5c1", null ],
      [ "freeProducerCallbacksFn", "struct_____producer_callbacks.html#a3a66f0af3c375e31c9b70620e90e171b", null ],
      [ "storageOverflowPressureFn", "struct_____producer_callbacks.html#a08ee06b1174e78fb949b16bc91f22437", null ],
      [ "version", "struct_____producer_callbacks.html#a5b7a3a54c91979dea97605bf118b25b6", null ]
    ] ],
    [ "__StreamCallbacks", "struct_____stream_callbacks.html", [
      [ "bufferDurationOverflowPressureFn", "struct_____stream_callbacks.html#aeaf5d1f0e54ac95ec58a61ef66297bbb", null ],
      [ "customData", "struct_____stream_callbacks.html#a33f17c00624b4cd96fe002154f1ab1dd", null ],
      [ "droppedFragmentReportFn", "struct_____stream_callbacks.html#aa3471f201107e490e5547bd67a3d9f47", null ],
      [ "droppedFrameReportFn", "struct_____stream_callbacks.html#a0f2d222758b0a4cb7c530a648b8aea98", null ],
      [ "fragmentAckReceivedFn", "struct_____stream_callbacks.html#a0d804ce2026471e864398858bf5431a0", null ],
      [ "freeStreamCallbacksFn", "struct_____stream_callbacks.html#a15f15e1573ee5a64866aeabc3f471bfb", null ],
      [ "streamClosedFn", "struct_____stream_callbacks.html#aa31e0285035a0181f89f9a7db96afee8", null ],
      [ "streamConnectionStaleFn", "struct_____stream_callbacks.html#a3d68873fe6bd8d8c90c74e093adbd233", null ],
      [ "streamDataAvailableFn", "struct_____stream_callbacks.html#a75807b95d2474543986d7a08157d7397", null ],
      [ "streamErrorReportFn", "struct_____stream_callbacks.html#ab4aed92c2cb08e96277053ef85f44fda", null ],
      [ "streamLatencyPressureFn", "struct_____stream_callbacks.html#a348711ddae5263f07a28906900434750", null ],
      [ "streamReadyFn", "struct_____stream_callbacks.html#a547834d2fd050854d74d0d7737280a4a", null ],
      [ "streamShutdownFn", "struct_____stream_callbacks.html#a8af3697a1bc3e0668b60f77360ddb295", null ],
      [ "streamUnderflowReportFn", "struct_____stream_callbacks.html#ab1d14f59e896febeae65b57c56da3669", null ],
      [ "version", "struct_____stream_callbacks.html#abf905e1040976396ad8f3af37a620d18", null ]
    ] ],
    [ "__AuthCallbacks", "struct_____auth_callbacks.html", [
      [ "customData", "struct_____auth_callbacks.html#a7429fe774ddd31b2abbfc2a13c65791a", null ],
      [ "deviceCertToTokenFn", "struct_____auth_callbacks.html#a6bff7a8e0d62bdfb6ee206e48d482b67", null ],
      [ "freeAuthCallbacksFn", "struct_____auth_callbacks.html#afd307e63566a02a50b2d6b21c73b5d04", null ],
      [ "getDeviceCertificateFn", "struct_____auth_callbacks.html#a096f97f4ab65325b09776f42b98b769b", null ],
      [ "getDeviceFingerprintFn", "struct_____auth_callbacks.html#aa205b6ec230719bc153739e6108218d8", null ],
      [ "getSecurityTokenFn", "struct_____auth_callbacks.html#a62dc3b695250ae0c24e6db763fa77ae4", null ],
      [ "getStreamingTokenFn", "struct_____auth_callbacks.html#a2489cd12b331a1c1121891d6ce793707", null ],
      [ "version", "struct_____auth_callbacks.html#a8737f0bbcd6d1844dbbd7b8ff9aef274", null ]
    ] ],
    [ "__ApiCallbacks", "struct_____api_callbacks.html", [
      [ "createDeviceFn", "struct_____api_callbacks.html#a6e421b1cb26651eb81b642cca00b96b0", null ],
      [ "createStreamFn", "struct_____api_callbacks.html#a97fad44f98a63d3507f58baab0623723", null ],
      [ "customData", "struct_____api_callbacks.html#a4736e86a8272d0c90888e6f8acbe6ce7", null ],
      [ "describeStreamFn", "struct_____api_callbacks.html#a6b1768366c1d2947553af81492cd2473", null ],
      [ "freeApiCallbacksFn", "struct_____api_callbacks.html#a0755592a536906d948047b068eb82a9b", null ],
      [ "getStreamingEndpointFn", "struct_____api_callbacks.html#a295fb04bb6f3e7c652b4b1fc7faea3e9", null ],
      [ "putStreamFn", "struct_____api_callbacks.html#a0bf3224a128a4c071a42744b41ed9635", null ],
      [ "tagResourceFn", "struct_____api_callbacks.html#ae87470524e69424f611bc075c523b584", null ],
      [ "version", "struct_____api_callbacks.html#a0d3c5e397c739a9babb32b22fa47fce4", null ]
    ] ],
    [ "ApiCallbacks", "group___public_structures.html#gac06e643927a3b54b4a81176a2ce7258e", null ],
    [ "AuthCallbacks", "group___public_structures.html#ga6c99fddb15c3aba43f4a65ed4c37119c", null ],
    [ "AwsCredentialProvider", "group___public_structures.html#ga882c67d71b64127b618d7e67b889526e", null ],
    [ "AwsCredentials", "group___public_structures.html#ga9178087f99d520c01400643671e115e6", null ],
    [ "CallInfo", "group___public_structures.html#ga7c7bb8da28fe7345793766c64a62310b", null ],
    [ "PApiCallbacks", "group___public_structures.html#ga9927752e5412f9eb12dc34421dd5a48a", null ],
    [ "PAuthCallbacks", "group___public_structures.html#ga3e8936eb7a2e32373a230d681ecbdce4", null ],
    [ "PAwsCredentialProvider", "group___public_structures.html#ga70d8fd7fc63e35e7e3c391cb09a1fb21", null ],
    [ "PAwsCredentials", "group___public_structures.html#ga55204b8d7a23b5f17bbc3bb1af8de130", null ],
    [ "PCallInfo", "group___public_structures.html#gaeb6a7e64d7b8b261cc265039d15912e1", null ],
    [ "PlatformCallbacks", "group___public_structures.html#ga79854a1eeeefdf4a035367cea5cf7547", null ],
    [ "PPlatformCallbacks", "group___public_structures.html#ga615a76f0cb15241cf90ddec88f56023d", null ],
    [ "PProducerCallbacks", "group___public_structures.html#ga59ab27ffd0ed312dea7befdc814a67b0", null ],
    [ "PRequestHeader", "group___public_structures.html#ga379a53dad36a25d77043e52e6d78a201", null ],
    [ "PRequestInfo", "group___public_structures.html#ga08b95d208befcbae758d6818d4fb6e28", null ],
    [ "ProducerCallbacks", "group___public_structures.html#ga74aea63ae74f5ec0355beecaf8b89711", null ],
    [ "PStreamCallbacks", "group___public_structures.html#gafcd71c24a4a7005b82099a48a5dd1c8b", null ],
    [ "RequestHeader", "group___public_structures.html#gaf6fb203058fee61d2eb8cdae41d708b4", null ],
    [ "RequestInfo", "group___public_structures.html#ga784a729ad770b936048cbe12c5dfa461", null ],
    [ "StreamCallbacks", "group___public_structures.html#gaa58ca428b4692878fe8f2bad6f5463f3", null ]
];