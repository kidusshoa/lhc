import { useEffect, useState } from "react";
import { supabase } from "./../../../lib/supabase.ts";

const ClientReview = () => {
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    fetchReviews();
  }, []);
  const fetchReviews = async () => {
    const { data, error } = await supabase
      .from("Reviews")
      .select("*")
      .order("created_at", { ascending: false });
    console.log(data);

    if (error) {
      console.error("Error fetching data:", error);
    } else if (data) {
      const formattedData = data.map((data) => ({
        ...data,
        created_at: data.created_at.split("T")[0],
      }));
      setReviews(formattedData);
    }
  };
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 h-full w-full p-20 ">
      {reviews.map((review: any) => (
        <div className="h-40 w-full">
          <div key={review.id} className="bg-white p-4 rounded-lg  shadow-md">
            <h3 className="text-lg font-bold">{review.full_name}</h3>
            <p className="text-sm text-gray-500">{review.email}</p>
            <p className="mt-2 text-gray-700">{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientReview;
