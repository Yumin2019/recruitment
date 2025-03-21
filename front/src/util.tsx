import { toaster } from "./components/ui/toaster";

const successToast = (text: string) => {
  toaster.create({
    description: text,
    type: "success",
  });
};

const errorToast = (text: string) => {
  toaster.create({
    description: text,
    type: "error",
  });
};

const warningToast = (text: string) => {
  toaster.create({
    description: text,
    type: "warning",
  });
};

const infoToast = (text: string) => {
  toaster.create({
    description: text,
    type: "info",
  });
};

// 네이버 지도 API 초기화
const initMap = (lat: number, lng: number) => {
  let map = new naver.maps.Map("map", {
    center: new naver.maps.LatLng(lat, lng), //지도의 초기 중심 좌표
    zoom: 15, //지도의 초기 줌 레벨
    zoomControl: false, //줌 컨트롤의 표시 여부
  });

  //지도 인터랙션 끄기
  if (map.getOptions("draggable")) {
    map.setOptions({
      draggable: false,
      pinchZoom: false,
      scrollWheel: false,
      keyboardShortcuts: false,
      disableDoubleTapZoom: true,
      disableDoubleClickZoom: true,
      disableTwoFingerTapZoom: true,
    });
  }

  //모든 지도 컨트롤 숨기기
  if (map.getOptions("scaleControl")) {
    map.setOptions({
      scaleControl: false,
      logoControl: true,
      mapDataControl: false,
      zoomControl: false, // 확대바
      mapTypeControl: false, // 일반, 위성
    });
  }

  // 커스텀 마커(이미지)
  let marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(lat, lng),
    map: map,
    icon: {
      url: "/pin_marker.png",
      size: new naver.maps.Size(48, 48),
    },
  });
};

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
};

const toDollarString = (v: any) => {
  return v.toLocaleString();
};

const getCountOfLines = (str: string) => {
  return (str.match(/\n/g) || "").length + 1;
};

const copyCipboard = (text: string, func: any = () => {}) => {
  navigator.clipboard.writeText(text).then((v) => {
    func();
  });
};

export {
  successToast,
  errorToast,
  infoToast,
  warningToast,
  initMap,
  getRandomInt,
  toDollarString,
  getCountOfLines,
  copyCipboard,
};
