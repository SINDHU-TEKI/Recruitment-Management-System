
import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  removeFavorite
} from "../features/savedJobsSlice";

function SavedJobs() {

  const dispatch = useDispatch();

  const savedJobs = useSelector(
    state => state.savedJobs
  );

  function getJobImage(job) {

    const title = job.title.toLowerCase();

    if (title.includes("data")) {
      return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800";
    }

    if (title.includes("frontend")) {
      return "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800";
    }

    if (title.includes("java")) {
      return "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800";
    }

    return "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800";
  }

  return (

    <div className="favorites-container">

      <h1 className="page-title">
        Saved Jobs
      </h1>

      {
        savedJobs.length === 0 ? (

          <div className="empty-favorites">

            <h2>
              No Saved Jobs
            </h2>

            <p>
              Add jobs from the Jobs page.
            </p>

          </div>

        ) : (

          <div className="favorites-grid">

            {
              savedJobs.map(job => (

                <div
                  key={job.id}
                  className="favorite-card"
                >

                  <img
                    src={getJobImage(job)}
                    alt={job.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "8px"
                    }}
                  />

                  <div className="favorite-content">

                    <h2>
                      {job.title}
                    </h2>

                    <p>
                      🏢 {job.company}
                    </p>

                    <p>
                      📍 {job.location}
                    </p>

                    <p>
                      💰 {job.salary}
                    </p>

                    <p>
                      Experience: {job.experience}
                    </p>

                    <button
                      onClick={() =>
                        dispatch(
                          removeFavorite(job.id)
                        )
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))
            }

          </div>

        )
      }

    </div>

  );
}

export default SavedJobs;
