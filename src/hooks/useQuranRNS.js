import { useEffect, useState } from "react";

const useQuranRNS = () => {
  const [reciters, setReciters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [slectedRecister, setSelectedReciter] = useState([]);

  useEffect(() => {
    const getReciters = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://mp3quran.net/api/v3/reciters");
        const data = await res.json();
        if (data.reciters) {
          setReciters(data.reciters);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
   

    getReciters();
  }, []);

  return { reciters, loading };
};

export default useQuranRNS;
