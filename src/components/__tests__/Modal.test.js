import { render, screen } from "@testing-library/react";
import Modal from "../Modal";

describe("Modal", () => {
  test("renders title", () => {
    render(<Modal title="My fun title" commits={[]} />);

    const title = document.querySelector("h2");

    expect(title).toHaveTextContent("My fun title");
  });

  test("renders message if no commits", () => {
    render(
      <Modal
        noDataMessage="No recent commits"
        title="My fun title"
        commits={[]}
      />
    );

    const noCommitsMessage = screen.getByText(/no recent commits/i);
    const author = screen.queryByText("Author");
    const date = screen.queryByText("Date");
    const message = screen.queryByText("Commit Message");

    expect(author).toBeNull();
    expect(date).toBeNull();
    expect(message).toBeNull();
    expect(noCommitsMessage).toBeInTheDocument();
  });

  test("renders commit info", () => {
    const testData = [
      {
        commit: {
          author: { name: "Bob Smith", date: new Date().toISOString() },
          message: "its a message"
        },
        sha: "1234abc"
      }
    ];

    render(<Modal title="My fun title" commits={testData} />);

    expect(
      screen.getByText(`Author: ${testData[0].commit.author.name}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Commit Message: ${testData[0].commit.message}`)
    ).toBeInTheDocument();
  });
});
