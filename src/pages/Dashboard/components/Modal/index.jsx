import { Container } from "./stylesModal"

export const ModalEu = ({ children }) => {
    return (
        <Container>
            <div className="modal-box">
                {children}
            </div>
        </Container>
    )
}