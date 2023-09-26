import PsychologistList from "../components/PsychologistList"

const PsychologistListPage = () => {
  return (
    <div>


      <div style={{ backgroundImage: "radial-gradient(circle at center,#00208c 0%,#25efcb 100%)" }}>
        <div style={{ padding: "27px 0" }}
          className="container"
        >
          <h1 className="text-white fw-medium px-1 px-md-0 px-lg-0" >
            Top Psychologists.
            <br />
            Talk to a Psychologist Online.
          </h1>
          <p className="text-white fw-semibold px-1 px-md-0 px-lg-0 ">
            Consult Top Psychologists. Verified and         <br />Certified

            Counselling and Clinical Psychologists.
            <br />
            Best Online Psychologist Consultation Website.
          </p>
        </div>
      </div>
      <div style={{ backgroundColor: "rgb(251,251,253)" }} className="mt-3 mt-md-0 mt-lg-0 mt-sm-0">
        <h1 className="text-center">Top Psychologist</h1>


        {/* psychologists lists */}




        <PsychologistList />
      </div>

    </div>
  )
}

export default PsychologistListPage