import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { withSwal } from "react-sweetalert2";
function Categories({ swal }) {
  const [editedCategory, setEditedCategory] = useState(null);
  const [name, setName] = useState("");
  const [parentCategory, setParentCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  function fetchCategories() {
    axios.get("/api/categories").then((result) => {
      setCategories(result.data);
    });
  }
{/* ------------------save Category ------------------ */}
  async function saveCategory(ev) {
    ev.preventDefault();
    const data = { name,
       parentCategory,
       properties:properties.map(p=>({
        name:p.name,
        values:p.values.split(','),
       })), };

    if (editedCategory) {
      data._id = editedCategory._id;
      await axios.put("/api/categories", data);
      setEditedCategory(null);
    } else {
      await axios.post("/api/categories", data);
    }
    setName("");
    setParentCategory('');
    setProperties([]);
    fetchCategories();
  }
{/* ------------------Edit Category ------------------ */}

  function editCategory(category) {
    setEditedCategory(category);
    setName(category.name);
    setParentCategory(category.parent?._id);
    setProperties(category.properties.map(({name,values}) =>({
      name,
      values:values.join(',')
    })))
  }
  function deleteCategory(category) {
    swal
      .fire({
        title: "Are you sure?",
        text: `Do you want to delete ${category.name}? `,
        showCancelButton: true,
        cancelButtonText: "Cancel",
        confirmButtonText: "Yes, Delete",
        reverseButtons: true,
        confirmButtonColor: "#d55",
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          const { _id } = category;
          await axios.delete("/api/categories?_id=" + _id);
          fetchCategories();
        }
      })
      .catch((error) => {
        // when promise rejected...
      });
  }
  function addProperty() {
    setProperties((prev) => {
      return [...prev, { name: "", value: "" }];
    });
  }
  function handlePropertyNameChange(index, property, newName) {
    setProperties((prev) => {
      const properties = [...prev];
      properties[index].name = newName;
      return properties;
    });
    console.log({ index, property, newName });
  }

  function handlePropertyValuesChange(index, property, newValues) {
    setProperties((prev) => {
      const properties = [...prev];
      properties[index].values = newValues;
      return properties;
    });
    console.log({ index, property, newValues });
  }

  function removeProperty(indexToRemove) {
    setProperties((prev) => {
      const newPrroperties = [...prev].filter((p, pIndex) => {
        return pIndex !== indexToRemove;
      });
      return newPrroperties;
    });
  }
  //----------------return--------
  return (
    <Layout>
      <h1>Categories</h1>
      <label>
        {" "}
        {editedCategory
          ? `Edit category ${editedCategory.name}`
          : "Create new category"}
      </label>

      <form onSubmit={saveCategory}>
        <div className="flex gap-1">
          <input
            className=""
            type="text"
            placeholder={"Category name"}
            onChange={(ev) => setName(ev.target.value)}
            value={name}
          />
          <select
            className=""
            onChange={(ev) => setParentCategory(ev.target.value)}
            value={parentCategory}
          >
            <option value={null}>No parent category</option>
            {categories.length > 0 &&
              categories.map((category) => (
                // eslint-disable-next-line react/jsx-key
                <option value={category._id}>{category.name}</option>
              ))}
          </select>
        </div>
        {/* Add of properties */}
        <div className="mb-2">
          <label className="block">Properties</label>
          <button
            type="button"
            onClick={addProperty}
            className="btn-default"
          >
            Add new property
          </button>
          {properties.length > 0 &&
            properties.map((property, index) => (
              // eslint-disable-next-line react/jsx-key
              <div className="flex gap-1 mb-2">
                <input
                  type="text"
                  className="mb-0"
                  value={property.name}
                  onChange={(ev) =>
                    handlePropertyNameChange(index, property, ev.target.value)
                  }
                  placeholder="property name (exemple :color)"
                />

                <input
                  type="text"
                  className="mb-0"
                  value={property.values}

                  onChange={(ev) =>
                    handlePropertyValuesChange(index, property, ev.target.value)
                  }
                  placeholder="values, comma separated"
                />
                <button
                  className="btn-red"
                  onClick={() => removeProperty(index)}
                  type="button"
                >
                  Remove
                </button>
              </div>
            ))}
        </div>
        <div className="flex gap-1">
          {editedCategory && <button className="btn-default"
          type="button"
          onClick={()=> {setEditedCategory(null);setName('');
            setParentCategory('');
            setProperties([]);
          }

          }>Cancel</button>}
          <button
            type="submit"
            className="btn-primary py-1 "
          >
            Save
          </button>
        </div>
      </form>
      {/* ------------------Table of Categories------------------------- */}

      {!editedCategory && (
        <table className="basic mt-4">
          <thead>
            <tr>
              <td>Categories name</td>
              <td>Parent category</td>
            </tr>
          </thead>
          <tbody>
            {categories.length > 0 &&
              categories.map((category) => (
                // eslint-disable-next-line react/jsx-key
                <tr>
                  <td>{category.name}</td>
                  <td>{category?.parent?.name}</td>
                  <td>
                    <button
                      onClick={() => editCategory(category)}
                      className="btn-default mr-1"
                    >
                      {" "}
                      Edit
                    </button>
                    <button
                      className="btn-red"
                      onClick={() => deleteCategory(category)}
                    >
                      {" "}
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </Layout>
  );
}

export default withSwal(({ swal }, ref) => <Categories swal={swal} />);
