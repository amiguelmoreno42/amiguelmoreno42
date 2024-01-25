import Modal from "./Modal";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";

function ProjectModal({ project }) {
  return (
    <div>
      <Modal>
        <Modal.Open opens="details-project">
          <div>
            <ProjectCard project={project}></ProjectCard>
          </div>
        </Modal.Open>
        <Modal.Window name="details-project">
          <ProjectDetails project={project}></ProjectDetails>
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default ProjectModal;
