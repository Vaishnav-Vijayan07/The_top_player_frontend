import { videos_in_days, watchedVideo } from "@/store/CourcesSlice";
import Cookies from "js-cookie";
// import Link from "next/link";
// import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
// import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { Dialog } from "primereact/dialog";
import { GiTrophyCup } from "react-icons/gi";
import { getUserInfo } from "@/store/AuthSlice";
import {
  ControlBar,
  CurrentTimeDisplay,
  ForwardControl,
  PlayToggle,
  PlaybackRateMenuButton,
  Player,
  ReplayControl,
  TimeDivider,
  VolumeMenuButton,
  FullscreenToggle,
} from "video-react";
import Image from "next/image";
const VideoShow = ({ video_id, courseId, list, Lang, week_id, day_id, subCourseId, type, video_key, video_name, next_name, next_id, key, video_image, day_time }) => {
  // console.log(
  //   `2 => Lang : ${Lang} - type: ${type} - week : ${week_id} -  day : ${day_id} - courseId: ${courseId} - subCourseId : ${subCourseId} - videId : ${video_id}`
  // );
  // console.log(`3 => video_key : ${video_key + 1} - list: ${list} `);
  // console.log(`3 => cuurent_video : ${video_key} - list: ${next_id} `);
  const dispatch = useDispatch();
  // const router = useRouter();
  const { t } = useTranslation();
  // const [nextBtn, setNextBtn] = useState(false);
  const [DialogVisable, setDialogVisible] = useState(false);
  const intervalIDRef = useRef(null);
  const startTimer = useCallback(() => {
    intervalIDRef.current = setTimeout(() => {
      setDialogVisible(false);
    }, 5000);
  }, []);

  // const videoRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(intervalIDRef.current); // to clean up on unmount
  }, []);

  const videoRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // useEffect(() => {
  //   const video = videoRef.current;

  //   const handleFullscreenChange = () => {
  //     if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
  //       exitFullscreen();
  //     }
  //   };

  //   const exitFullscreen = () => {
  //     if (document.exitFullscreen) {
  //       document.exitFullscreen();
  //     } else if (document.webkitExitFullscreen) {
  //       document.webkitExitFullscreen();
  //     } else if (document.mozCancelFullScreen) {
  //       document.mozCancelFullScreen();
  //     } else if (document.msExitFullscreen) {
  //       document.msExitFullscreen();
  //     }
  //   };

  //   video.addEventListener('fullscreenchange', handleFullscreenChange);
  //   video.addEventListener('webkitfullscreenchange', handleFullscreenChange);
  //   video.addEventListener('mozfullscreenchange', handleFullscreenChange);
  //   video.addEventListener('MSFullscreenChange', handleFullscreenChange);

  //   return () => {
  //     video.removeEventListener('fullscreenchange', handleFullscreenChange);
  //     video.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
  //     video.removeEventListener('mozfullscreenchange', handleFullscreenChange);
  //     video.removeEventListener('MSFullscreenChange', handleFullscreenChange);
  //   };
  // }, []);
  // console.log(video_id)

  const { user_info } = useSelector((state) => state.AuthSlice);

  useEffect(() => {
    if (!user_info) {
      dispatch(getUserInfo());
    }
  }, [user_info, dispatch]);

  // console.log(user_info);
  // const togglePlay = () => {
  //   if (videoRef.current.paused) {
  //     videoRef.current.play();
  //     // setIsPlaying(true);
  //   } else {
  //     videoRef.current.pause();
  //     // setIsPlaying(false);
  //   }
  // };

  // const [videoPlay, setVideoPlay] = useState(false);
  // const playerRef = useRef(null);
  console.log(day_time);
  const handleVideoEnded = () => {
    if (list === video_key + 1 && parseInt(day_time) === 0) {
      setDialogVisible(true);
      startTimer();
      setTimeout(() => {
        const data = {
          videoId: parseInt(video_id),
        };
        dispatch(watchedVideo(data))
          .unwrap()
          .then(() => {
            const all = {
              courseId: courseId,
              subCourseId: subCourseId,
              day: day_id,
            };
            dispatch(videos_in_days(all));
          });
      }, 5000);
    } else {
      const data = {
        videoId: parseInt(video_id),
      };
      dispatch(watchedVideo(data))
        .unwrap()
        .then(() => {
          const all = {
            courseId: courseId,
            subCourseId: subCourseId,
            day: day_id,
          };
          dispatch(videos_in_days(all));
        });
    }
  };
  return (
    <div className="video_relative">
      <Player fluid poster={video_image} playsInline={true} key={key} onEnded={handleVideoEnded}>
        <source
          src={`${process.env.customKey}/video/${video_id}/${courseId}/${Cookies.get("UT")}`}
          // onEnded={() => {

          // }}
        />
        {/* <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" /> */}

        <ControlBar>
          {/* <PlayToggle onClick={handlePlayPause} /> */}
          {/* <SeekBar />  */}
          <FullscreenToggle className="ToogelFull" />
          <ReplayControl seconds={10} order={1.1} />
          <ForwardControl seconds={10} order={1.2} />
          <CurrentTimeDisplay order={4.1} />
          <TimeDivider order={4.2} />
          <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
          <VolumeMenuButton disabled={false} />
        </ControlBar>

        {/* <Player onEnded={handleVideoEnded} /> */}

        <div className={`watermark`} style={{ fontSize: "16px" }}>
          {/* {user_info?.username}
      <br /> */}
          User ID: {user_info?.id}
        </div>

        <div className={`watermark-logo`} style={{ fontSize: "20px" }}>
          <Image src={"/ms-icon-70x70.png"} alt="icon" objectFit="contain" width={70} height={70} />
        </div>
      </Player>
      {/* <div
        className={` text-center ${
          isFullscreen ? "watermark_full" : "watermark"
        }`}
      >
       User ID: {user_info?.id}
      </div> */}
      {/* <ReactPlayer
        className="test_video"
        pip={false}
        key={key}
        ref={playerRef}
        url={`${
          process.env.customKey
        }/video/${video_id}/${courseId}/${Cookies.get("UT")}`}
        config={{
          file: {
            attributes: {
              controlsList: "nodownload nopictureinpicture nofullscreen",
              disablePictureInPicture: true,
              disableFullScreen: true,
              playsinline: "true", // for iOS Safari
              webkitplaysinline: "true",
            },
          },
        }}
        controls={true}
        // playIcon={<75}
        playsinline={true}
        onClick={() => setVideoPlay((prevPlaying) => !prevPlaying)}
        playing={videoPlay}
        onEnded={() => {
          if (list === video_key + 1 && parseInt(week_id) === 4) {
            setDialogVisible(true);
            startTimer();
            setTimeout(() => {
              const data = {
                videoId: parseInt(video_id),
              };
              dispatch(watchedVideo(data))
                .unwrap()
                .then(() => {
                  const all = {
                    courseId: courseId,
                    subCourseId: subCourseId,
                    day: day_id,
                  };
                  dispatch(videos_in_days(all));
                });
            }, 5000);
          } else {
            const data = {
              videoId: parseInt(video_id),
            };
            dispatch(watchedVideo(data))
              .unwrap()
              .then(() => {
                const all = {
                  courseId: courseId,
                  subCourseId: subCourseId,
                  day: day_id,
                };
                dispatch(videos_in_days(all));
              });
          }
        }}
      /> */}
      {/* <video
        // onDoubleClick={(e) => {
        //   e.preventDefault();
        //   e.stopPropagation();
        // }}
        disablePictureInPicture
        // onClick={togglePlay}
        // onClick={(event) => event.stopPropagation()}
        // onContextMenu={(e) => e.preventDefault()}
        // disablePictureInPicture
        // autoPlay
        // controlsList="nodownload"
        key={key}
        ref={videoRef}
        onClick={togglePlay}
        playsInline
        controls
        controlsList="nodownload nofullscreen  nopictureinpicture" // Disable specific controls
        preload="metadata"
        className="test_video"
        onEnded={() => {
          if (list === video_key + 1 && parseInt(week_id) === 4) {
            setDialogVisible(true);
            startTimer();
            setTimeout(() => {
              const data = {
                videoId: parseInt(video_id),
              };
              dispatch(watchedVideo(data))
                .unwrap()
                .then(() => {
                  const all = {
                    courseId: courseId,
                    subCourseId: subCourseId,
                    day: day_id,
                  };
                  dispatch(videos_in_days(all));
                });
            }, 5000);
          } else {
            const data = {
              videoId: parseInt(video_id),
            };
            dispatch(watchedVideo(data))
              .unwrap()
              .then(() => {
                const all = {
                  courseId: courseId,
                  subCourseId: subCourseId,
                  day: day_id,
                };
                dispatch(videos_in_days(all));
              });
          }
        }}
      >
        <source
          src={`${
            process.env.customKey
          }/video/${video_id}/${courseId}/${Cookies.get("UT")}`}
          type="video/mp4"
        />
      </video> */}
      {/* {list !== video_key + 1 && nextBtn && (
        <Link
          className={"Next_video"}
          href={`/${Lang}/user/programs/${type}/${week_id}/${day_id}/${courseId}/${subCourseId}/${next_id}/${next_name}`}
        >
          {t("vidoe.next")}
        </Link>
      )} */}
      <Dialog
        visible={DialogVisable}
        className="Dialog_content"
        onHide={() => {
          setDialogVisible(false);
        }}
      >
        <div className={"cup"}>
          <GiTrophyCup />
        </div>

        <h2
          className="text-center cup_text"
          style={{
            direction: Lang === "ar" ? "rtl" : "ltr",
          }}
        >
          {t("vidoe.congrats1")} <span className="En_num2">{week_id}!</span> {t("vidoe.congrats2")}
        </h2>
      </Dialog>
    </div>
  );
};

export default VideoShow;
