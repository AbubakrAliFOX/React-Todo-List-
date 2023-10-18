import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import './TodoItem.css'

export default function TodoItem ({todo, remove, toggle}) {
    const labelId = `checkbox-list-label-${todo.id}`;

        return (
            <ListItem
            className='List-Item'
            secondaryAction={
                <IconButton onClick={remove} edge="end" aria-label="comments">
                <DeleteIcon />
                </IconButton>
            }
            disablePadding
            >
            <ListItemButton role={undefined} dense>
                <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={todo.completed}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                    onChange={toggle}
                />
                </ListItemIcon>
                <ListItemText className='todo-text' style={{textDecoration: todo.completed && "line-through"}} id={labelId} primary={todo.text} />
            </ListItemButton>
            </ListItem>
        );
}