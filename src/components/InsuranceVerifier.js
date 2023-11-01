import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { verifyInsurance } from '../redux/actions';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const InsuranceVerifier = () => {
  const dispatch = useDispatch();
  const insuranceData = useSelector(state => state.insuranceData);
  const [insuranceList, setInsuranceList] = useState([]);

  useEffect(() => {
    dispatch(verifyInsurance());
  }, [dispatch]);

  useEffect(() => {
    setInsuranceList(insuranceData);
  }, [insuranceData]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(insuranceList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setInsuranceList(items);
  }

  return (
    <div id="insuranceVerifier">
      <h2>Insurance Verifier</h2>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="insuranceList">
          {(provided) => (
            <ul className="insuranceList" {...provided.droppableProps} ref={provided.innerRef}>
              {insuranceList.map(({id, name}, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <p>{name}</p>
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default InsuranceVerifier;