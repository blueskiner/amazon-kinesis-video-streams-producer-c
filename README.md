<h1 align="center">
  Amazon Kinesis Video Streams C Producer
  <br>
</h1>


<h4 align="center"> Amazon Kinesis Video Streams | Secure Video Ingestion for Analysis &amp; Storage </h4>

<p align="center">
  <a href="https://github.com/awslabs/amazon-kinesis-video-streams-producer-c/actions/workflows/ci.yml"> <img src="https://github.com/awslabs/amazon-kinesis-video-streams-producer-c/actions/workflows/ci.yml/badge.svg"> </a>
  <a href="https://codecov.io/gh/awslabs/amazon-kinesis-video-streams-producer-c"> <img src="https://codecov.io/gh/awslabs/amazon-kinesis-video-streams-producer-c/branch/master/graph/badge.svg" alt="Coverage Status"> </a>
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#build">Build</a> •
  <a href="#run">Run</a> •
  <a href="#documentation">Documentation</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a>
</p>

## Key Features
Amazon Kinesis Video Streams Producer SDK for C/C++ makes it easy to build an on-device application that securely connects to a video stream, and reliably publishes video and other media data to Kinesis Video Streams. It takes care of all the underlying tasks required to package the frames and fragments generated by the device's media pipeline. The SDK also handles stream creation, token rotation for secure and uninterrupted streaming, processing acknowledgements returned by Kinesis Video Streams, and other tasks.

## Build
### Download
To download run the following command:

`git clone --recursive https://github.com/awslabs/amazon-kinesis-video-streams-producer-c.git`

Note: If you miss running git clone with --recursive, run `git submodule update --init` in the amazon-kinesis-video-streams-producer-c/open-source directory
You will also need to install `pkg-config`, `automake` and `CMake` and a build enviroment

### Configure
Create a build directory in the newly checked out repository, and execute CMake from it.

`mkdir -p amazon-kinesis-video-streams-producer-c/build; cd amazon-kinesis-video-streams-producer-c/build; cmake .. `

By default we download all the libraries from GitHub and build them locally, so should require nothing to be installed ahead of time.
If you do wish to link to existing libraries you can use the following flags to customize your build.

#### Cross-Compilation

If you wish to cross-compile `CC` and `CXX` are respected when building the library and all its dependencies. See our [ci.yml](.github/workflows/ci.yml) for an example of this. Every commit is cross compiled to ensure that it continues to work.


#### CMake Arguments
You can pass the following options to `cmake ..`.

* `-DBUILD_DEPENDENCIES` -- Whether or not to build depending libraries from source
* `-DBUILD_TEST=TRUE` -- Build unit/integration tests, may be useful for confirm support for your device. `./tst/producer_test`
* `-DCODE_COVERAGE` --  Enable coverage reporting
* `-DCOMPILER_WARNINGS` -- Enable all compiler warnings
* `-DADDRESS_SANITIZER` -- Build with AddressSanitizer
* `-DMEMORY_SANITIZER` --  Build with MemorySanitizer
* `-DTHREAD_SANITIZER` -- Build with ThreadSanitizer
* `-DUNDEFINED_BEHAVIOR_SANITIZER` Build with UndefinedBehaviorSanitizer
* `-DALIGNED_MEMORY_MODEL` Build for aligned memory model only devices. Default is OFF.
* `-DLOCAL_OPENSSL_BUILD` Whether or not to use local OpenSSL build. Default is OFF.
* `-DCONSTRAINED_DEVICE` -- Change thread stack size to 0.5Mb, needed for Alpine.


DMEMORY_SANITIZER, DTHREAD_SANITIZER etc. flags works only with clang compiler 
and not with gcc compiler. For using clang (on Ubuntu), do the following - 
```
sudo apt-get install clang
export CC=/usr/bin/clang
export CXX=/usr/bin/clang++
cmake .. -DMEMORY_SANITIZER=TRUE
```
DLOCAL_OPENSSL_BUILD requires first installing OpenSSL 1.1 (`brew install openssl@1.1` for Mac) and then running `export PKG_CONFIG_PATH="<YOUR-PATH>/openssl@1.1/lib/pkgconfig"` (your path can be printed to terminal using `which openssl` on Linux/Mac).


DMEMORY_SANITIZER, DTHREAD_SANITIZER etc. flags works only with clang compiler 
and not with gcc compiler. For using clang (on Ubuntu), do the following - 
```
sudo apt-get install clang
export CC=/usr/bin/clang
export CXX=/usr/bin/clang++
cmake .. -DMEMORY_SANITIZER=TRUE
```

### Build
To build the library run make in the build directory you executed CMake.

`make`

### Run samples
To run the samples:

```
export AWS_SECRET_ACCESS_KEY=<YourAWSSecretAccessKey>
export AWS_ACCESS_KEY_ID=<YourAWSAccessKey>
```
For audio+video, run `./kvsAudioVideoStreamingSample <stream-name> <streaming-duration-in-seconds> <sample-location> <audio-codec> <video-codec> <images-flag>`

The last 5 arguments are optional. By default, 
* the `streaming-duration-in-seconds` is 20 seconds
* `sample-location` is `../samples`
* `audio-codec` is `aac`
* `video-codec` is `h264`
* `images-flag` is `0`

Valid inputs for `<audio-codec>` in these samples are:
* aac
* alaw

Valid inputs for `<video-codec>` in these samples are:
* h264
* h265

If you want to use the sample for `PCM_ALAW/G.711` frames, run 
`./kvsAudioVideoStreamingSample <stream-name> <streaming-duration> <sample-location> alaw h264 0`

This will stream the video/audio files from the `samples/h264SampleFrames` or `samples/h265SampleFrames` and `samples/aacSampleFrames` or `samples/alawSampleFrames` respectively. 

If you want to enable KVS events in fragment metadata, change the `<images-flag>` parameter from 0 -> 1. This feature is found only in the audio/video sample, but can be written into the video only sample as well.

For video only, run `./kvsVideoOnlyRealtimeStreamingSample <stream-name> <video-codec> <streaming-duration-in-seconds> <sample-location>` OR `./kvsVideoOnlyOfflineStreamingSample <stream-name> <video-codec> <streaming-duration-in-seconds> <sample-location>`

Example: `./kvsVideoOnlyRealtimeStreamingSample myTest` OR  `./kvsVideoOnlyOfflineStreamingSample myTest`

This will stream the video files from the `samples/h264SampleFrames`. 

OR you can run `./kvsVideoOnlyRealtimeStreamingSample myTest h265` OR `./kvsVideoOnlyOfflineStreamingSample myTest h265`

This will stream the video files from the `samples/h265SampleFrames`. 

Note: The resulting sample video is the same.

For audio only, run `./kvsAudioOnlyStreamingSample <stream-name> <streaming_duration> <sample_location> <audio-codec>`.

This will stream the audio files from the `samples/aacSampleFrames` or `samples/alawSampleFrames` (as per the choice of audio codec in the last argument) respectively. 

### Running with IoT credential provider

To run the samples with IoT credential provider:

1. Run the IoT thing generation script available under `scripts`: `source scripts/generate-iot-credential.sh`. For more information on IoT set up, visit [AWS KVS IoT Set up](https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-iot.html)
2. Uncomment `#define IOT_CORE_ENABLE_CREDENTIALS 1` in the relevant sample
3. Build the changes: `make`
4. Run the sample using the instructions in previous section.

### Fragment metadata

`./kvsVideoOnlyRealtimeStreamingSample` is the only sample that has the [fragment metadata](https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-meta.html) implemented out of the box.

In addition to the required arguments above, this sample has an additional argument:
```shell
./kvsVideoOnlyRealtimeStreamingSample <stream-name> <video-codec> <streaming-duration-in-seconds> <sample-location> <num-metadata>
```

`num-metadata` -- the number of sample fragment metadata key-value pairs that are added to each fragment. Min: 0, Max: 10. Default: 10.

### Setting log levels


### Setup logging:
Set up the desired log level. The log levels and corresponding values currently available are:
1. `LOG_LEVEL_VERBOSE` ---- 1
2. `LOG_LEVEL_DEBUG`   ---- 2
3. `LOG_LEVEL_INFO`    ---- 3
4. `LOG_LEVEL_WARN`    ---- 4
5. `LOG_LEVEL_ERROR`   ---- 5
6. `LOG_LEVEL_FATAL`   ---- 6
7. `LOG_LEVEL_SILENT`  ---- 7
8. `LOG_LEVEL_PROFILE` ---- 8

To set a log level, you can set it using the deviceInfo structure. 
```
pDeviceInfo->clientInfo.loggerLogLevel = LOG_LEVEL_DEBUG;
```

By default, our samples set the log level to `LOG_LEVEL_DEBUG`.

The SDK also tracks entry and exit of functions which increases the verbosity of the logs. This will be useful when you want to track the transitions within the codebase. To do so, you need to set log level to `LOG_LEVEL_VERBOSE` and add the following to the cmake file:
`add_definitions(-DLOG_STREAMING)`
Note: This log level is extremely VERBOSE and could flood the files if using file based logging strategy.

### Run unit tests
Since these tests exercise networking you need to have AWS credentials specified, specifically you need to:

```
export AWS_SECRET_ACCESS_KEY=<YourAWSSecretAccessKey>
export AWS_ACCESS_KEY_ID=<YourAWSAccessKey>
```

Now you can execute the unit tests from the `build` directory as follows:
`./tst/producer_test`

### Offline mode
The samples run in near real time mode by default. In order to set up offline mode, the following APIs can be used in the samples instead of the realtime variant:

For video only: `createOfflineVideoStreamInfoProviderWithCodecs()`
For video and audio: `createOfflineAudioVideoStreamInfoProviderWithCodecs()`

The 2 APIs are available in [this](https://github.com/awslabs/amazon-kinesis-video-streams-producer-c/blob/412aab82c99a72f9dbde975f5fea81ffdc844ae5/src/include/com/amazonaws/kinesis/video/cproducer/Include.h) header file.

## DEBUG
* When building OpenSSL during `cmake ..`, if you encounter an architecture error such as `ld: symbol(s) not found for architecture i386`, building with a local OpenSSL build may help. First install OpenSSL 1.1 (for Mac: `brew install openssl@1.1`). Next set `export PKG_CONFIG_PATH="<YOUR-PATH>/openssl@1.1/lib/pkgconfig"` (your path can be printed to terminal using `which openssl` on Linux/Mac). Now set the following flag to ON when building: `cmake .. -DLOCAL_OPENSSL_BUILD=ON`. If there are still errors regarding locating the local OpenSSL library:
    * The following environment variables may need to be set to export:
        `export LDFLAGS="-L<YOUR-PATH>/openssl@1.1/lib"` and `export CPPFLAGS="-I<YOUR-PATH>/openssl@1.1/include"`
    * The path to OpenSSL’s root directory may need to be specified when running `cmake`:
        `-DOPENSSL_ROOT_DIR="<YOUR-PATH>/openssl@1.1/include/openssl"`
    * If you need to have openssl@1.1 first in your PATH, run:
        `echo 'export PATH="<YOUR-PATH>/openssl@1.1/bin:$PATH"' >> ~/.zshrc`

## Development
The repository is using `develop` branch as the aggregation and all of the feature development is done in appropriate feature branches. The PRs (Pull Requests) are cut on a feature branch and once approved with all the checks passed they can be merged by a click of a button on the PR tool. The master branch should always be build-able and all the tests should be passing. We are welcoming any contribution to the code base. The master branch contains our most recent release cycle from `develop`.

### Release
The repository is under active development and even with incremental unit test coverage where some of the tests are actually full integration tests, we require more rigorous internal testing in order to 'cut' release versions. The release is cut against a particular commit that gets approved. The general philosophy is to cut a release when a set of commits contribute to a self-containing feature or when we add major internal functionality improvements.

### Versioning
We deploy 3 digit version strings in a form of 'Major.Minor.Revision' scheme.
* Major version update - Major functionality changes. Might not have direct backward compatibility. For example, multiple public API parameter changes.
* Minor version update - Additional features. Major bug fixes. Might have some minor backward compatibility issues. For example, an extra parameter on a callback function.
* Revision version update - Minor features. Bug fixes. Full backward compatibility. For example, an extra fields added to the public structures with version bump.

## Documentation

## Related
* [CPP SDK](https://github.com/awslabs/amazon-kinesis-video-streams-producer-sdk-cpp/)
* [Java SDK](https://github.com/awslabs/amazon-kinesis-video-streams-producer-sdk-java/)
* [PIC](https://github.com/awslabs/amazon-kinesis-video-streams-pic/)

## License

This library is licensed under the Apache 2.0 License.
