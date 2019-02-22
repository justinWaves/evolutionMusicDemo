 var video_list      = ["video/ORWH.mp4", "video/crazylove.mp4", "video/WHlivee.mp4"
                            ];
        var video_index     = 0;
        var video_player    = null;

        function onload(){
            console.log("body loaded");
            video_player        = document.getElementById("idle_video");
            video_player.setAttribute("src", video_list[video_index]);
            video_player.play();
        }

        function onVideoEnded(){
            console.log("video ended");
            if(video_index < video_list.length - 1){
                video_index++;
            }
            else{
                video_index = 0;
            }
            video_player.setAttribute("src", video_list[video_index]);
            video_player.play();
        };
