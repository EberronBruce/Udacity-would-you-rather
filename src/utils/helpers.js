

// Retrieve this function from https://www.delftstack.com/howto/javascript/javascript-filter-object/
export function filterObject(mainObject, filterFunction){
    return Object.keys(mainObject)
          .filter( function(ObjectKey){
              return filterFunction(mainObject[ObjectKey])
          } )
          .reduce( function (result, ObjectKey){
              result[ObjectKey] = mainObject[ObjectKey];
              return result;
      }, {} );
}
