import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useCallback, useMemo } from "react";
import { repoSerial } from "../services/api.repo.got"; 
import * as ac from '../slices/got.slice'

export function useCharacters (){
  const characters: any = useSelector<RootState>((state) => state.charactersState.characters)
  const dispatch = useDispatch();

  const repo = useMemo (() => new repoSerial(),[]);

  const loadCharacters = useCallback(async () => {
    try {
 
      const loadedCharacters = await repo.getCharacters();
  
      dispatch(ac.load(loadedCharacters));
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo]);
  return {
    loadCharacters,
    characters
  }
}
