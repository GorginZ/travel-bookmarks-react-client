import React from "react";

class EditBookmark extends React.Component {
  state = { title: "", url: "", description: "", loading: true, id: this.props.match.params.id };
  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    const { id, title, url, description } = this.state
    await fetch(`http://localhost:3000/bookmarks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, url, description }),
    });
    this.props.history.push("/bookmarks");
  };

  async componentDidMount() {
    const { id } = this.state
    const response = await fetch(`http://localhost:3000/bookmarks/${id}`);
    const { title, url, description } = await response.json();
    this.setState({ title, url, description, loading: false });
  }

  render() {
    const { title, url, description, loading } = this.state;
    return (
      !loading && (
        <div className="container">
          <h1>Edit a bookmark</h1>
          <form onSubmit={this.onFormSubmit}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={this.onInputChange}
              value={title}
            />
            <label htmlFor="url">Url</label>
            <input
              type="text"
              name="url"
              id="url"
              onChange={this.onInputChange}
              value={url}
            />
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              onChange={this.onInputChange}
              value={description}
            ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      )
    );
  }
}

export default EditBookmark;