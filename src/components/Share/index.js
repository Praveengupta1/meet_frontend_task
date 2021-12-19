import { Button} from "@mui/material"
import ShareIcon from '@mui/icons-material/Share';
import "./share.css"
const Share = ()=><div className="share-button">
    <Button variant="outlined" startIcon={<ShareIcon/>}>Share</Button>
</div>

export default Share;