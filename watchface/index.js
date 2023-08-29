try {
    (() => {
        let n = __$$hmAppManager$$__.currentApp;
        const g = n.current,
            { px: e } =
                (new DeviceRuntimeCore.WidgetFactory(
                    new DeviceRuntimeCore.HmDomApi(n, g)
                ),
                    n.app.__globals__),
            p = Logger.getLogger("watchface6");

        //store data
        const timeDigi = [], dateDigi = [], batDigi = [], dataDigi = [], timeDigiAOD = [], dateDigiAOD = [];
        const mthc = [], mthe = [], mthAODc = [], mthAODe = [];
        const wksc = [], wktc = [], wke = [], wkAODsc = [], wkAODtc = [], wkAODe = [];
        for (let i = 0; i <= 9; i++) {
            timeDigi.push("timedigi/" + i.toString() + ".png");
            dateDigi.push("datedigi/" + i.toString() + ".png");
            batDigi.push("batdigi/" + i.toString() + ".png");
            dataDigi.push("whitedigi/" + i.toString() + ".png");
            timeDigiAOD.push("timedigiaod/" + i.toString() + ".png");
            dateDigiAOD.push("whitedigi/" + i.toString() + ".png");
        }
        for (let i of ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]) {
            mthc.push("monthc/" + i + ".png");
            mthe.push("monthe/" + i + ".png");
            mthAODc.push("monthcaod/" + i + ".png");
            mthAODe.push("montheaod/" + i + ".png");
        }
        for (let i of ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]) {
            wksc.push("weeksc/" + i + ".png");
            wktc.push("weektc/" + i + ".png");
            wke.push("weeke/" + i + ".png");
            wkAODsc.push("weekscaod/" + i + ".png");
            wkAODtc.push("weektcaod/" + i + ".png");
            wkAODe.push("weekeaod/" + i + ".png");
        }
        const time = {
            hour_zero: 1,
            hour_startX: 12, hour_startY: 293,
            hour_array: timeDigi,
            hour_space: 2,
            hour_align: hmUI.align.CENTER,
            minute_zero: 1,
            minute_startX: 105, minute_startY: 293,
            minute_array: timeDigi,
            minute_space: 2,
            minute_follow: 0,
            am_x: 9, am_y: 271,
            pm_x: 9, pm_y: 271,
            am_sc_path: 'AMc.png', pm_sc_path: 'PMc.png',
            am_tc_path: 'AMc.png', pm_tc_path: 'PMc.png',
            am_en_path: 'AMe.png', pm_en_path: 'PMe.png',
            show_level: hmUI.show_level.ONLY_NORMAL
        },
            colon = {
                x: 88, y: 298,
                src: 'colon.png',
                show_level: hmUI.show_level.ONLY_NORMAL
            },
            date = {
                month_startX: 25, month_startY: 349,
                month_sc_array: mthc,
                month_tc_array: mthc,
                month_en_array: mthe,
                month_zero: 0,
                month_follow: 0,
                month_is_character: true,
                day_startX: 80, day_startY: 349,
                day_sc_array: dateDigi,
                day_tc_array: dateDigi,
                day_en_array: dateDigi,
                day_space: 1.5,
                day_zero: 0,
                day_follow: 0,
                day_is_character: false,
                show_level: hmUI.show_level.ONLY_NORMAL
            },
            week = {
                x: 115, y: 349,
                week_sc: wksc,
                week_tc: wktc,
                week_en: wke,
                show_level: hmUI.show_level.ONLY_NORMAL
            },
            bat = {
                x: 121, y: 271,
                w: 40,
                h_space: 1,
                type: hmUI.data_type.BATTERY,
                font_array: batDigi,
                align_h: hmUI.align.RIGHT,
                show_level: hmUI.show_level.ONLY_NORMAL,
            },
            elements = {
                x: 0, y: 0,
                src: 'elements.png',
                show_level: hmUI.show_level.ONLY_NORMAL
            },
            heartpulseDigi = {
                x: 43, y: 422,
                w: 40,
                h_space: 1.5,
                type: hmUI.data_type.HEART,
                font_array: dataDigi,
                align_h: hmUI.align.LEFT,
                show_level: hmUI.show_level.ONLY_NORMAL,
            },
            walkDigi = {
                x: 43, y: 387,
                w: 65,
                h_space: 1.5,
                type: hmUI.data_type.STEP,
                font_array: dataDigi,
                align_h: hmUI.align.LEFT,
                show_level: hmUI.show_level.ONLY_NORMAL,
            },
            lock = {
                x: 120, y: 451,
                src: 'lock.png',
                type: hmUI.system_status.LOCK,
                show_level: hmUI.show_level.ONLY_NORMAL
            },
            dnd = {
                x: 44, y: 451,
                src: 'minus-circle.png',
                type: hmUI.system_status.DISTURB,
                show_level: hmUI.show_level.ONLY_NORMAL
            },
            bleoff = {
                x: 82, y: 463,
                src: 'bluetoothoff.png',
                type: hmUI.system_status.DISCONNECT,
                show_level: hmUI.show_level.ONLY_NORMAL
            },
            kafkaQDark = {
                x: 14, y: 113,
                src: 'kafkaq.png',
                show_level: hmUI.show_level.ONLY_NORMAL
            },
            timeDark = {
                hour_zero: 1,
                hour_startX: 12, hour_startY: 288,
                hour_array: timeDigiAOD,
                hour_space: 2,
                hour_align: hmUI.align.CENTER,
                minute_startX: 105, minute_startY: 288,
                minute_space: 2,
                minute_zero: 1,
                minute_array: timeDigiAOD,
                minute_align: hmUI.align.CENTER,
                minute_follow: 0,
                am_x: 145, am_y: 268,
                pm_x: 145, pm_y: 268,
                am_sc_path: 'AMcaod.png', pm_sc_path: 'PMcaod.png',
                am_tc_path: 'AMcaod.png', pm_tc_path: 'PMcaod.png',
                am_en_path: 'AMeaod.png', pm_en_path: 'PMeaod.png',
                show_level: hmUI.show_level.ONLY_NORMAL
            },
            colonDark = {
                x: 88, y: 298,
                src: 'colonAOD.png',
                show_level: hmUI.show_level.ONLY_NORMAL
            },
            dateDark = {
                month_startX: 25, month_startY: 344,
                month_sc_array: mthAODc,
                month_tc_array: mthAODc,
                month_en_array: mthAODe,
                month_zero: 0,
                month_space: 10,
                month_is_character: true,
                day_startX: 80, day_startY: 344,
                day_sc_array: dateDigiAOD,
                day_tc_array: dateDigiAOD,
                day_en_array: dateDigiAOD,
                day_zero: 0,
                day_follow: 0,
                day_is_character: false,
                show_level: hmUI.show_level.ONLY_NORMAL
            },
            weekDark = {
                x: 115, y: 344,
                week_sc: wkAODsc,
                week_tc: wkAODtc,
                week_en: wkAODe,
                show_level: hmUI.show_level.ONLY_NORMAL
            },
            kafkaQ = {
                x: 14, y: 113,
                src: 'kafkaq.png',
                show_level: hmUI.show_level.ONLY_AOD
            },
            timeAOD = {
                hour_zero: 1,
                hour_startX: 12, hour_startY: 288,
                hour_array: timeDigiAOD,
                hour_space: 2,
                hour_align: hmUI.align.CENTER,
                minute_startX: 105, minute_startY: 288,
                minute_space: 2,
                minute_zero: 1,
                minute_array: timeDigiAOD,
                minute_align: hmUI.align.CENTER,
                minute_follow: 0,
                am_x: 145, am_y: 268,
                pm_x: 145, pm_y: 268,
                am_sc_path: 'AMcaod.png', pm_sc_path: 'PMcaod.png',
                am_tc_path: 'AMcaod.png', pm_tc_path: 'PMcaod.png',
                am_en_path: 'AMeaod.png', pm_en_path: 'PMeaod.png',
                show_level: hmUI.show_level.ONLY_AOD
            },
            colonAOD = {
                x: 88, y: 298,
                src: 'colonAOD.png',
                show_level: hmUI.show_level.ONLY_AOD
            },
            dateAOD = {
                month_startX: 25, month_startY: 344,
                month_sc_array: mthAODc,
                month_tc_array: mthAODc,
                month_en_array: mthAODe,
                month_zero: 0,
                month_space: 10,
                month_is_character: true,
                day_startX: 80, day_startY: 344,
                day_sc_array: dateDigiAOD,
                day_tc_array: dateDigiAOD,
                day_en_array: dateDigiAOD,
                day_zero: 0,
                day_follow: 0,
                day_is_character: false,
                show_level: hmUI.show_level.ONLY_AOD
            },
            weekAOD = {
                x: 115, y: 344,
                week_sc: wkAODsc,
                week_tc: wkAODtc,
                week_en: wkAODe,
                show_level: hmUI.show_level.ONLY_AOD
            },
            preferences = {
                edit_id: 101,
                x: 0,
                y: 0,//84
                w: 192,
                h: 490,
                select_image: "",
                un_select_image: "",
                default_type: 0x186a0,
                optional_types: [{
                    type: 0x186a0,
                    preview: 'cover.png',
                    title_sc: '浅色模式-长按以应用',
                    title_tc: '淺色模式-按住以套用',
                    title_en: 'Light Mode - Hold to apply'
                }, {
                    type: 0x186a1,
                    preview: 'coveraod.png',
                    title_sc: '深色模式-长按以应用',
                    title_tc: '深色模式-按住以套用',
                    title_en: 'Dark Mode - Hold to apply'
                }],
                count: 2,
                tips_BG: 'tip.png',
                tips_x: 35,
                tips_y: 410,
                tips_width: 121,
                tips_margin: 8
            };

        function decodeUtf8(array, outLimit = Infinity, startPosition = 0) {
            let out = "";
            let length = array.length;
            let i = startPosition, c, char2, char3;
            while (i < length && out.length < outLimit) {
                c = array[i++];
                switch (c >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        out += String.fromCharCode(c);
                        break;
                    case 12:
                    case 13:
                        char2 = array[i++];
                        out += String.fromCharCode(
                            (c & 31) << 6 | char2 & 63
                        );
                        break;
                    case 14:
                        char2 = array[i++];
                        char3 = array[i++];
                        out += String.fromCharCode(
                            (c & 15) << 12 | (char2 & 63) << 6 | (char3 & 63) << 0
                        );
                        break;
                }
            }
            return [out, i - startPosition];
        }

        g.module = DeviceRuntimeCore.WatchFace({
            init_view() {
                let prf = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_GROUP, preferences);
                let mode = prf.getProperty(hmUI.prop.CURRENT_TYPE);
                const language = hmSetting.getLanguage();
                let filename, voiceover = [], res;
                switch (language) {
                    case 0:
                        filename = "voiceoversc.txt";
                        break;
                    case 1:
                        filename = "voiceovertc.txt";
                        break;
                    case 2:
                        filename = "voiceoveren.txt";
                        break;
                }
                const [fsStat, err] = hmFS.stat_asset(filename);
                if (err == 0) {
                    const buffer = new ArrayBuffer(fsStat.size);
                    const file = hmFS.open_asset(filename, hmFS.O_RDONLY);
                    hmFS.read(file, buffer, 0, fsStat.size);
                    hmFS.close(file);
                    res = decodeUtf8(new Uint8Array(buffer))[0];
                    voiceover = res.split(/\r\n |\n/);
                }
                function VoDisplay() {
                    const t = hmSensor.createSensor(hmSensor.id.TIME);
                    if (err == 0) {
                        // let select = parseInt(Math.random() * voiceover.length);
                        const time = hmSensor.createSensor(hmSensor.id.TIME);
                        const select = time.utc % voiceover.length;
                        hmUI.showToast({ text: voiceover[select] });
                    }
                }
                // console.log(voiceover);

                //start render
                switch (mode) {
                    case 0x186a0:
                        let anim = hmUI.createWidget(hmUI.widget.IMG_ANIM, {
                            x: 0,
                            y: 0,
                            anim_path: "KafkaAnim",
                            anim_prefix: "KafkaAnim",
                            anim_ext: "png",
                            anim_fps: 20,
                            anim_size: 40,
                            repeat_count: 0,
                            anim_repeat: true,
                            anim_status: 1,
                            show_level: hmUI.show_level.ONLY_NORMAL,
                        });
                        hmUI.createWidget(hmUI.widget.IMG, elements);
                        hmUI.createWidget(hmUI.widget.IMG, colon);
                        hmUI.createWidget(hmUI.widget.IMG_TIME, time);
                        hmUI.createWidget(hmUI.widget.IMG_DATE, date);
                        hmUI.createWidget(hmUI.widget.IMG_WEEK, week);
                        hmUI.createWidget(hmUI.widget.TEXT_IMG, bat);
                        hmUI.createWidget(hmUI.widget.TEXT_IMG, heartpulseDigi);
                        hmUI.createWidget(hmUI.widget.TEXT_IMG, walkDigi);

                        hmUI.createWidget(hmUI.widget.IMG_STATUS, lock);
                        hmUI.createWidget(hmUI.widget.IMG_STATUS, dnd);
                        hmUI.createWidget(hmUI.widget.IMG_STATUS, bleoff);

                        const mask = hmUI.createWidget(hmUI.widget.TEXT, {
                            x: 0,
                            y: 0,
                            w: 192,
                            h: 256,
                            show_level: hmUI.show_level.ONLY_NORMAL,
                        });
                        const mask2 = hmUI.createWidget(hmUI.widget.TEXT, {
                            x: 0,
                            y: 257,
                            w: 192,
                            h: 256,
                            show_level: hmUI.show_level.ONLY_NORMAL,
                        });
                        // Animation pause
                        mask.addEventListener(hmUI.event.CLICK_DOWN, function () {
                            anim.setProperty(hmUI.prop.ANIM_STATUS, hmUI.anim_status.PAUSE);
                            const timer1 = timer.createTimer(
                                1200,
                                800,
                                function () {
                                    const isPause = anim.getProperty(hmUI.prop.ANIM_IS_PAUSE);
                                    if (isPause) {
                                        anim.setProperty(hmUI.prop.ANIM_STATUS, hmUI.anim_status.RESUME);
                                        timer.stopTimer(timer1);
                                    }
                                },
                                {}
                            );
                            VoDisplay();
                        });
                        mask2.addEventListener(hmUI.event.CLICK_DOWN, function () {
                            anim.setProperty(hmUI.prop.ANIM_STATUS, hmUI.anim_status.PAUSE);
                            const timer2 = timer.createTimer(
                                1200,
                                800,
                                function () {
                                    const isPause = anim.getProperty(hmUI.prop.ANIM_IS_PAUSE);
                                    if (isPause) {
                                        anim.setProperty(hmUI.prop.ANIM_STATUS, hmUI.anim_status.RESUME);
                                        timer.stopTimer(timer2);
                                    }
                                },
                                {}
                            );
                        });
                        // Animation resume
                        mask.addEventListener(hmUI.event.CLICK_UP, function () {
                            timer.stopTimer(timer1);
                            anim.setProperty(hmUI.prop.ANIM_STATUS, hmUI.anim_status.RESUME);
                        });
                        mask2.addEventListener(hmUI.event.CLICK_UP, function () {
                            timer.stopTimer(timer2);
                            anim.setProperty(hmUI.prop.ANIM_STATUS, hmUI.anim_status.RESUME);
                        });
                        break;
                    case 0x186a1:
                        hmUI.createWidget(hmUI.widget.IMG_TIME, timeDark);
                        hmUI.createWidget(hmUI.widget.IMG, colonDark);
                        hmUI.createWidget(hmUI.widget.IMG_DATE, dateDark);
                        hmUI.createWidget(hmUI.widget.IMG_WEEK, weekDark);
                        let kfq = hmUI.createWidget(hmUI.widget.IMG, kafkaQDark);
                        kfq.addEventListener(hmUI.event.CLICK_UP, function () {
                            VoDisplay();
                        });
                        break;
                }

                //render (AOD)
                hmUI.createWidget(hmUI.widget.IMG, kafkaQ);
                hmUI.createWidget(hmUI.widget.IMG_TIME, timeAOD);
                hmUI.createWidget(hmUI.widget.IMG, colonAOD);
                hmUI.createWidget(hmUI.widget.IMG_DATE, dateAOD);
                hmUI.createWidget(hmUI.widget.IMG_WEEK, weekAOD);
            },
            onInit() {
                p.log("index.js on init invoke");
            },
            build() {
                this.init_view();
                p.log("index.js on ready invoke");
            },
            onDestory() {
                p.log("index.js on destory invoke");
            }
        });
    })();
} catch (n) {
    console.log(n);
}