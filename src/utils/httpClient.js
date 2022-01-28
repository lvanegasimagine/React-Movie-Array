const API = 'https://api.themoviedb.org/3';

export function get(path){
    return fetch(API + path, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODVhNWFhZTljYTU4YjI5MmZkNDVlMTFmNTJhMmM0YSIsInN1YiI6IjVlZTdhMmVlM2ZmMmRmMDAyMTZjMmYxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qoJSjrsD2aJE_Jy4ZqVGeA-zpviuQ6DSO6NvpMQ4r0g",
        "Content-Type": "application/json;charset=utf-8"
      }
    }).then((result) => result.json())
}