import { CircularProgress } from '@material-ui/core';

export default function Loader() {
    return (
            <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
                <CircularProgress />
                <h3>Loading</h3>
            </div>
    );
}