import React, { useEffect, useState } from "react";
import { Container, Row, Pagination } from "react-bootstrap";
import Header from "../Home/components/header";
import "./UserSide.css";
import { jobList, JobDetail } from "./components/Data";
import JobCard from "./components/jobCard";
import seach from "../../assests/images/search.png";
import loc from "../../assests/images/location.png";

const bacgroundSelect = {
  background: "rgba(109, 14, 157, 0.19)",
};

function JobFeed() {
  const [location, setLocation] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedJob, setSelectedJob] = useState(JobDetail[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState(0);

  const jobsPerPage = 6;

  const handleSearch = (event) => {
    setCurrentPage(1);
    setSearchKeyword(event.target.value);
  };

  const handleLocationChange = (event) => {
    setCurrentPage(1);
    setLocation(event.target.value);
  };

  const filteredJobs = jobList.filter((job) => {
    const titleMatch = job.title
      .toLowerCase()
      .includes(searchKeyword.toLowerCase());
    const locationMatch = job.companyLocation
      .toLowerCase()
      .includes(location.toLowerCase());
    return titleMatch && locationMatch;
  });

  const totalJobs = filteredJobs.length;
  const totalPages = Math.ceil(totalJobs / jobsPerPage);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const setJobIndex = (index) => {
    const selectedItem = JobDetail.find((item) => item.id === index);
    if (selectedItem) {
      setSelectedJob(selectedItem);
    } else {
      setSelectedJob(JobDetail[0]);
    }
  };

  useEffect(() => {
    setSelected(-1);
  }, [currentPage]);

  const forBackgroundSelection = (id) => {
    if (id === selected) return true;
    return false;
  };

  return (
    <>
      <div className="jobFeedPage">
        <Header />

        <Container>
          <Row className="pt-5 pb-5 searchCont">
            <div className="searchJobCont mx-3">
              <p className="searchJobFieldText">What</p>
              <input
                type="text"
                className="form-control searchJobField"
                placeholder="Job title, Description etc."
                value={searchKeyword}
                onChange={handleSearch}
              />
              <img className="searchJobIcon" alt="searchIcon" src={seach} />
            </div>
            <div className="searchLocCont mx-3">
              <p className="searchLocFieldText">Where</p>
              <input
                type="text"
                className="form-control searchLocField"
                placeholder="Location"
                value={location}
                onChange={handleLocationChange}
              />
              <img className="searchLocIcon" alt="locationIcon" src={loc} />
            </div>
          </Row>
        </Container>
        <Container fluid>
          <Container>
            <Row className="pt-4 pb-5 jobFeedDisplay">
              <div className="col-lg-5 p-0">
                <div className="JOBS">JOBS</div>
                {currentJobs.map((item, index) => (
                  <div
                    key={index}
                    className="displayJobs p-2"
                    onClick={() => {
                      setSelected(index);
                      setJobIndex(item.id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    style={forBackgroundSelection(index) ? bacgroundSelect : {}}
                  >
                    <Row>
                      <div className="col-lg-10 d-flex gap-1">
                        <div className="capitalLetter">
                          <p className="p-0 m-0">
                            {item.title[0].toUpperCase()}
                          </p>
                        </div>
                        <div>
                          <p
                            style={{ lineHeight: "1.5" }}
                            className="displayJobTitle p-0 m-0"
                          >
                            {item.title}
                          </p>
                          <p className="p-0 m-0 displayJobLocation">
                            {item.companyLocation}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <p className="displayJobPay">{item.amount}</p>
                      </div>
                    </Row>
                    <p className="displayJobDescription">
                      <strong>Job Description : </strong>
                    </p>
                    <p className="displayJobDescription2">
                      {/* {item.job_Description} */}
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore......
                    </p>
                  </div>
                ))}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="text-center mt-4">
                    <Pagination>
                      {Array.from({ length: totalPages }, (_, index) => (
                        <Pagination.Item
                          key={index + 1}
                          active={index + 1 === currentPage}
                          onClick={() => paginate(index + 1)}
                        >
                          {index + 1}
                        </Pagination.Item>
                      ))}
                    </Pagination>
                  </div>
                )}
              </div>

              <div className="col-lg-7 p-0">
                {selectedJob && <JobCard selectedJob={selectedJob} />}
              </div>
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
}

export default JobFeed;
