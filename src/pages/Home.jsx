import { useState, useEffect } from "react";
import { fetchAmadeus } from "../utils/API";
import Featured from "../components/Featured";

export default function Home() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getActivities() {
      try {
        const data = await fetchAmadeus("shopping/activities", {
          longitude: 13.405,
          latitude: 52.52,
          radius: 850,
        });
        setActivities(data.data || []);
      } catch (err) {
        console.error("Error:", err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    }

    getActivities();
  }, []);

  return (
    <section className="p-4 bg-slate-200">
      <div id="featured" className="container mx-auto">
        <h2 className="font-bold text-4xl text-slate-900">Featured</h2>
        <Featured data={activities.slice(0, 8)} loading={loading} />
      </div>
    </section>
  );
}
