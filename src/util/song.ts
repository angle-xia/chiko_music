
import { formatSecond, imgurl } from '@/util';

interface SongList {
    id: number;
    singer: string;
    name: string;
    album: string;
    duration: number;
    image: string;
    url: string;
    playCount: string | number;
    score: string | number;
    idx: number;
}


export const useSong = (songList: any) => {
    const songMsg: SongList = {
        id: songList.id,
        singer: filterSinger(songList.ar || songList.artists),
        name: songList.name,
        album: songList.al ? songList.al.name : songList.album.name,
        duration: formatSecond(songList.dt || songList.duration),
        image: songList.al ? songList.al.picUrl : songList.album.artist.img1v1Url,
        url: `https://music.163.com/song/media/outer/url?id=${songList.id}.mp3`,
        playCount: songList.playCount || "",
        score: songList.score || "",
        idx: songList.idx
    }
    return songMsg;
}

function filterSinger(singer: { name: string }[]) {
    if (!singer) {
        return '';
    }
    return singer.map((item: any) => item.name).join('/');
}
