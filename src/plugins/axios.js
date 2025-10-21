import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjczMzI4NWRhNTJhNmRmNzcxMzJhY2Q1OGExZGYzNSIsIm5iZiI6MTc2MDcyMDE3Ni4xLCJzdWIiOiI2OGYyNzUzMDc4ODUzYTg3NjM0ZDIwYWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.EiHqSjxPEM9mBPB_I89CCV-as-dQquzzPEafrN4viXY`,
  },
});

export default api;