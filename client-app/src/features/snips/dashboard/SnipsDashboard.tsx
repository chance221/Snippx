import React from 'react'
import { List } from 'semantic-ui-react'
import { ISnip } from '../../../app/models/snip'
import { SnipList } from './SnipList'
import { SnipsDetails } from '../../details/SnipsDetails'
import { SnipForm } from '../../form/SnipForm'

interface IProps{
  snips:ISnip[];
  selectSnip: (id:string) => void;
  selectedSnip: ISnip | null;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  setSelectedSnip: (snip: ISnip | null) => void;
  createSnip: (snip:ISnip) => void;
  editSnip:  (snip: ISnip) =>void;
  deleteSnip: (id: string) => void;
}

export const SnipsDashboard: React.FC<IProps> = ({
  snips, 
  selectSnip, 
  selectedSnip, 
  editMode, 
  setEditMode, 
  setSelectedSnip,
  editSnip,
  createSnip,
  deleteSnip
}) => {
  return (
    
    <div className="ui grid">
      <div className="eight wide column">
        <List>
            <SnipList 
              snips = {snips} 
              selectSnip = {selectSnip}
              deleteSnip = {deleteSnip}/>
        </List>
      </div>
      <div className= "eight wide column">
        {selectedSnip && !editMode &&(
          <SnipsDetails 
            snip ={selectedSnip} 
            setEditMode={setEditMode}
            setSelectedSnip={setSelectedSnip}
          />
        )}
        {editMode && (
          <SnipForm
            key={(selectedSnip && selectedSnip.id) || 0} 
            setEditMode={setEditMode} 
            snip={selectedSnip!} 
            createSnip = {createSnip}
            editSnip = {editSnip}
            />
          )}
      </div>
    </div>
  )
}