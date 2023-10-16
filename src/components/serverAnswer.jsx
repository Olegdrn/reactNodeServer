import { useEffect, useState } from "react";
// import { UseFetch } from "../hooks/useFetch";
export default function ServerAnswer() {

  const [data, setData] = useState({});

  useEffect(() => {
    fetch('./api')
      .then((response) => response.json())
      .then(response => setData({
        coneHeight: response.coneHeight,
        radius: response.radius,
        segmentNumbers: response.segmentNumbers
      }))
  }, [])

  //Если через useFetch
  // const { serverData, error, isLoading } = UseFetch("/api");
  // setData(serverData);

  return (
    <div className="serverAnswer">
      <p className="serverAnswerText">{!data ? "Loading..." : data.coneHeight}</p>
      <p className="serverAnswerText">{!data ? "Loading..." : data.radius}</p>
      <p className="serverAnswerText">{!data ? "Loading..." : data.segmentNumbers}</p>
    </div>
  )
}