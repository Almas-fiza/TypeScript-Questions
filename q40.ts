//Write a function called make_album() that builds a Object describing a music album
interface album {
    artist: string;
    album: string;
    tracks?: number;}

  const make_album =(artist : string , album : string , tracks: number) => {
let albumobj : album=
{
artist,
album ,
};

if(tracks)
{

    albumobj={
        ...albumobj,
        tracks,
    };
}
return albumobj;
  }
  console.log(make_album("Atif Aslam", "Laila Majnu" , 30));
  console.log(make_album("Shuja Haider", "Ru-Ba-Ru" , 40));
  console.log(make_album("Ed Sheeran", "Divide", 20));








