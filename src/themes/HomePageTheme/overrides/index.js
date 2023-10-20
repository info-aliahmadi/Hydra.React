// third-party
import { merge } from 'lodash';

// project import
import Badge from './Badge';
import AppBar from './AppBar';
import Button from './Button';
import CardContent from './CardContent';
import Checkbox from './Checkbox';
import Chip from './Chip';
import IconButton from './IconButton';
import InputLabel from './InputLabel';
import LinearProgress from './LinearProgress';
import Link from './Link';
import ListItemIcon from './ListItemIcon';
import OutlinedInput from './OutlinedInput';
import TextareaAutosize from './TextareaAutosize';
import Tab from './Tab';
import TableCell from './TableCell';
import Tabs from './Tabs';
import Typography from './Typography';
import Tooltip from './Tooltip';
import DialogContent from './DialogContent';

// ==============================|| OVERRIDES - MAIN ||============================== //

export default function ComponentsOverrides(theme) {
  return merge(
    AppBar(theme),
    Button(theme),
    Badge(theme),
    CardContent(),
    Checkbox(theme),
    Chip(theme),
    IconButton(theme),
    InputLabel(theme),
    LinearProgress(),
    Link(),
    ListItemIcon(),
    OutlinedInput(theme),
    TextareaAutosize(theme),
    Tab(theme),
    TableCell(theme),
    Tabs(),
    Typography(),
    Tooltip(theme),
    DialogContent(theme)
  );
}
