import React from "react";

function Table({ data }) {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Reviews</th>
            <th>Rating</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((product, index) => (
              <tr key={index}>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.total_reviews}</td>
                <td>{product.rating}</td>
                <td>
                  <img src={product.image_url} alt={product.title} width="50" />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
