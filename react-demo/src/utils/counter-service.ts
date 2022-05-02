const url = "https://feedmi-counter.herokuapp.com/"

export function reactionFeedback(reaction: string)
  {
    fetch(url + "feedback/" + reaction)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

export async function getReactionCounts()
{
    let res
    await fetch(url + "counts")
      .then((response) => response.json())
      .then(
            (data) => 
            {
                console.log(data)
                res = data;
            }
      );
    return res
}