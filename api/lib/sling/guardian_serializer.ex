defmodule Sling.GuardianSerializer do
  @behaviour Guardian.Serializer

  alias Sling.Repo
  alias Sling.Accounts.User

  def for_token(user = %User{}), do: {:ok, "user:#{user.id}"}
  def for_token(_), do: {:error, "Unknown resource type"}

  def from_token("User:" <> id), do: {:ok, Repo.get(User, String.to_integer(id))}
  def from_token(_), do: {:error, "Unknown resource type"}
end
