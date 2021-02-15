# Local Development:

`npm run start`

This will start the local server on http://localhost:3000/

# To Run Tests:

`npm run test`

# Things that could still be improved:

- Improved testing with testing-library: I'm used to testing with enyzme, but the trend seems to be moving to using testing-library. I've taken this coding challenge as an opportunity to get practice with it, but that does mean that there are holes in my tests.
- Date parsing: I think the ideal situation would be that commit dates would be shown in the end user's timezone, although I could imagine a case for it being in UTC. Regardless, it could be prettied up to be more human readable.
- Making the modal component more reusable by decoupling it's knowledge of commits. I'd flatten the commit data that comes back from Github, and then pass keys to the Modal component for look up. This move towards reusability is also why I added a `noDataMessage` and `title` prop for Modal.
