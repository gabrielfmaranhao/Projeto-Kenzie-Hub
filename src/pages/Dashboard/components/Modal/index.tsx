import { IChildrenProvider } from "../../../../contexts/RoutesFunctions"
import { Container } from "./stylesModal"

export const ModalEu = ({ children }:IChildrenProvider) => {
    return (
        <Container>
            <div className="modal-box">
                {children}
            </div>
        </Container>
    )
}