defmodule SlingWeb.UserView do
  use SlingWeb, :view
  alias SlingWeb.UserView

  def render("user.json", %{user: user}) do
    %{
      id: user.id,
      username: user.username,
      email: user.email,
    }
  end
end
