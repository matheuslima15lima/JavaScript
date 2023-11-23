import React from "react";
import "./TableEvento.css";
import editPen from "../../../Assets/images/images/edit-pen.svg";
import trashDelete from "../../../Assets/images/images/trash-delete.svg";
import {dateFormatDbToView} from "../../../Utils/StringFunction"
const TableEvento = ({ dados, fnUpdate, fnDelete }) => {
    console.log(dados)
  return (
    <table className="table-data">
      <thead className="table-data__head">
        <tr className="table-data__head-row">
          <th className="table-data__head-title table-data__head-title--big">
         nomeEvento
          </th>
          <th className="table-data__head-title table-data__head-title--big">
          DataEvento
          </th>
          <th className="table-data__head-title table-data__head-title--big">
            Descrição
          </th>
        
          <th className="table-data__head-title table-data__head-title--big">
           TipoEvento
          </th>

          <th className="table-data__head-title table-data__head-title--little">
            Editar
          </th>
          <th className="table-data__head-title table-data__head-title--little">
            Deletar
          </th>
        </tr>
      </thead>
      
      {dados.map((tp) => {
        return (
            <tr className="table-data__head-row">
          <td className="table-data__data table-data__data--big">
            {tp.nomeEvento}
          </td>
          <td className="table-data__data table-data__data--big">
            {dateFormatDbToView(tp.dataEvento)}
          </td>
          <td className="table-data__data table-data__data--big">
            {tp.descricao.substr(0,17)}
          </td>
       
          <td className="table-data__data table-data__data--big">
            {tp.idTipoEvento}
          </td>

          <td className="table-data__data table-data__data--little">
            <img
              className="table-data__icon"
              src={editPen}
              alt=""
              onClick={() => {
                fnUpdate(tp.idEvento);
              }}
            />
          </td>

          <td className="table-data__data table-data__data--little">
            <img
              className="table-data__icon"
              src={trashDelete}
              alt=""
              onClick={() => {
                fnDelete(tp.idEvento);
              }}
            />
          </td>
        </tr>
        );
      })}
      <tbody></tbody>
    </table>
  );
};
export default TableEvento;