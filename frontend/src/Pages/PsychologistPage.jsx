import Psychologist from "../components/Psychologist"

const PsychologistPage = () => {
  return (
    <div>


      <div style={{ backgroundImage: "radial-gradient(circle at center,#00208c 0%,#25efcb 100%)" }}>
        <div style={{ padding: "27px 0" }}
          className="container"
        >
          <h1 className="text-white" style={{ fontWeight: "600", fontSize: "39px" }}>
            Top Psychologists.
            <br />
            Talk to a Psychologist Online.
          </h1>
          <p className="text-white fw-semibold">
            Consult Top Psychologists. Verified and         <br />Certified

            Counselling and Clinical Psychologists.
            <br />
            Best Online Psychologist Consultation Website.
          </p>
        </div>
      </div>
      <div style={{backgroundColor:"rgb(251,251,253)"}}>
        <h1 className="text-center">Top Psychologist</h1>
      <Psychologist />
      </div>

    </div>
  )
}

export default PsychologistPage