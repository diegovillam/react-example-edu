import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import axios from 'axios';

export type Album = {
  id: number;
  userId: number;
  title: string;
}

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export type PhotoComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

type PhotoContextValue = {
  loading: boolean;
  albums: Album[];
  setAlbums(value: Album[]): void;
  photos: Photo[];
  setPhotos(value: Photo[]): void;
}

// @ts-ignore
export const PhotoContext = createContext<PhotoContextValue>();

export const PhotoProvider = (props: any) => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);

  const value: PhotoContextValue = useMemo(() => {
    return {
      albums, 
      setAlbums,
      photos,
      setPhotos,
      loading,  
      setLoading,
    };
  }, [albums, photos, loading]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(res => setPhotos(res.data));
    axios
      .get('https://jsonplaceholder.typicode.com/albums')
      .then(res => setAlbums(res.data));
  }, []);

  return (
    <PhotoContext.Provider value={value} {...props} />
  )
};

export const usePhotos = () => {
  const ctx = useContext(PhotoContext);
  return ctx;
};