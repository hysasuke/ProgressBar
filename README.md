# progress-bar-rn

---

A light and simple progress bar component created for React Native

## Installation

---

```
npm install progress-bar-rn
```

## Usage

---

```
import ProgressBar from "progress-bar-rn";

<ProgressBar
        containerShadowStyle={{ ... }}
        trackColor={"#00A0E9"}
        trackStyle={{
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
        }}
        type={'timing'} // optional
        animationStarted={state.alarmStatus === 'pending'} // only useful when type is timing
        duration={60 * 1000} // only useful when type is timing
        initialValue={currentProgress}// only useful when type is timing
        progress={50}
        style={{
          borderRadius: 10,
          backgroundColor: "black",
          marginHorizontal: 15,
          paddingVertical: 20,
          marginBottom: 20,
        }}
      >
        /* children components */
</ProgressBar>
```

## Props

---

| Prop                   | Description                                                                                                 | Default |
|:---------------------- |:-----------------------------------------------------------------------------------------------------------:|:-------:|
| `containerShadowStyle` | Set shadow of container                                                                                     | none    |
| `trackColor`           | Set color of track                                                                                          | none    |
| `trackStyle`           | Set style of track                                                                                          | none    |
| `progress`             | Set current progress percentage, e.g. 50                                                                    | 0       |
| `style`                | Set style of container                                                                                      | none    |
| `type`                 | *optional*: `timing`  When type is set to timing, then the increment of the progress bar will be continuous | none    |
| `initialValue`         | *optional*  Used to set where the continuous increment starts                                               | 0       |
| `duration`             | *optional*  Used to set the duration (in ms) of the continuous increment from 0 to 100                      | 500     |
| `animationStarted`     | Set whether or not the continuous increment is started                                                      | false   |

### 
