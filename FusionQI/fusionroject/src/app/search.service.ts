import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
 
@Injectable({
  providedIn: 'root'
})
export class SearchService {
 
  suggestions: string[] = [
    'Javafullstack',
    'Mulesoftcourses',
    'Python',
    'java'
    
  ];
 
  getSearchSuggestions(query: string): Observable<string[]> {
  
    const filteredSuggestions = this.suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(query.toLowerCase())
    );
    return of(filteredSuggestions);
}
}
 