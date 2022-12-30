export type IContext = {
  session: any; // TODO: set session types
};

// TODO: this is where the session is created based on the input. Read more about the apollo graph context.
export async function createContext(): Promise<IContext> {
  return {
    session: { isAuth: true },
  };
}
