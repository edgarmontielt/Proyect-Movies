const API = "https://api.themoviedb.org/3/"
export default async function getMovie(path) {
    const result = await fetch(API + path, {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWMyMjMyYWU0ZTI1ODcxNGUwNDdhZTkwMWMyNWUzOSIsInN1YiI6IjYyMDU5MmM3MGYzNjU1MDBjZDBkNTg0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sgzx4adefukP_DsJgZPqk2x_dMnb9v_Fu4DqZFe1HuY",
      "Content-Type": "application/json;charset=utf-8",
    },
  })
  return await result.json()
}