# SR2EUtils

Namespace: SR2E

```csharp
public static class SR2EUtils
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [SR2EUtils](/docs/dev/api/sr2e/sr2eutils)<br />
Attributes [ExtensionAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.runtime.compilerservices.extensionattribute)

## Fields

### **player**

```csharp
public static GameObject player;
```

### **addedTranslations**

```csharp
public static Dictionary<string, Dictionary<string, string>> addedTranslations;
```

### **vaccableGroup**

```csharp
public static IdentifiableTypeGroup vaccableGroup;
```

### **FXLibrary**

```csharp
public static TripleDictionary<GameObject, ParticleSystemRenderer, string> FXLibrary;
```

### **FXLibraryReversable**

```csharp
public static TripleDictionary<string, ParticleSystemRenderer, GameObject> FXLibraryReversable;
```

## Properties

### **weatherStateDefinitions**

```csharp
public static WeatherStateDefinition[] weatherStateDefinitions { get; }
```

#### Property Value

WeatherStateDefinition[]<br />

### **systemContext**

```csharp
public static SystemContext systemContext { get; }
```

#### Property Value

SystemContext<br />

### **gameContext**

```csharp
public static GameContext gameContext { get; }
```

#### Property Value

GameContext<br />

### **sceneContext**

```csharp
public static SceneContext sceneContext { get; }
```

#### Property Value

SceneContext<br />

### **weatherStates**

```csharp
public static Il2CppArrayBase<WeatherStateDefinition> weatherStates { get; }
```

#### Property Value

Il2CppArrayBase&lt;WeatherStateDefinition&gt;<br />

### **inGame**

```csharp
public static bool inGame { get; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### **isAnyMenuOpen**

```csharp
public static bool isAnyMenuOpen { get; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

## Methods

### **getWeatherStateByName(String)**

```csharp
public static WeatherStateDefinition getWeatherStateByName(string name)
```

#### Parameters

`name` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

#### Returns

WeatherStateDefinition<br />

### **LoadTextFile(String)**

```csharp
public static string LoadTextFile(string name)
```

#### Parameters

`name` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

#### Returns

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **WeatherState(String)**

```csharp
public static WeatherStateDefinition WeatherState(string name)
```

#### Parameters

`name` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

#### Returns

WeatherStateDefinition<br />

### **AddTranslation(String, String, String)**

```csharp
public static LocalizedString AddTranslation(string localized, string key, string table)
```

#### Parameters

`localized` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

`key` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

`table` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

#### Returns

LocalizedString<br />

### **AddTranslationFromSR2E(String, String, String)**

```csharp
public static LocalizedString AddTranslationFromSR2E(string sr2eTranslationID, string key, string table)
```

#### Parameters

`sr2eTranslationID` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

`key` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

`table` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

#### Returns

LocalizedString<br />

### **SetTranslation(String, String, String)**

```csharp
public static void SetTranslation(string localized, string key, string table)
```

#### Parameters

`localized` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

`key` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

`table` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **SetTranslationFromSR2E(String, String, String)**

```csharp
public static void SetTranslationFromSR2E(string sr2eTranslationID, string key, string table)
```

#### Parameters

`sr2eTranslationID` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

`key` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

`table` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **SpawnActor(GameObject, Vector3)**

```csharp
public static GameObject SpawnActor(GameObject obj, Vector3 pos)
```

#### Parameters

`obj` GameObject<br />

`pos` Vector3<br />

#### Returns

GameObject<br />

### **SpawnActor(GameObject, Vector3, Vector3)**

```csharp
public static GameObject SpawnActor(GameObject obj, Vector3 pos, Vector3 rot)
```

#### Parameters

`obj` GameObject<br />

`pos` Vector3<br />

`rot` Vector3<br />

#### Returns

GameObject<br />

### **SpawnActor(GameObject, Vector3, Quaternion)**

```csharp
public static GameObject SpawnActor(GameObject obj, Vector3 pos, Quaternion rot)
```

#### Parameters

`obj` GameObject<br />

`pos` Vector3<br />

`rot` Quaternion<br />

#### Returns

GameObject<br />

### **SpawnDynamic(GameObject, Vector3, Quaternion)**

```csharp
public static GameObject SpawnDynamic(GameObject obj, Vector3 pos, Quaternion rot)
```

#### Parameters

`obj` GameObject<br />

`pos` Vector3<br />

`rot` Quaternion<br />

#### Returns

GameObject<br />

### **SpawnFX(GameObject, Vector3)**

```csharp
public static GameObject SpawnFX(GameObject fx, Vector3 pos)
```

#### Parameters

`fx` GameObject<br />

`pos` Vector3<br />

#### Returns

GameObject<br />

### **SpawnFX(GameObject, Vector3, Quaternion)**

```csharp
public static GameObject SpawnFX(GameObject fx, Vector3 pos, Quaternion rot)
```

#### Parameters

`fx` GameObject<br />

`pos` Vector3<br />

`rot` Quaternion<br />

#### Returns

GameObject<br />

### **Get&lt;T&gt;(String)**

```csharp
public static T Get<T>(string name)
```

#### Type Parameters

`T`<br />

#### Parameters

`name` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

#### Returns

T<br />

### **ConvertToSprite(Texture2D)**

```csharp
public static Sprite ConvertToSprite(Texture2D texture)
```

#### Parameters

`texture` Texture2D<br />

#### Returns

Sprite<br />

### **CopyObject(GameObject)**

```csharp
public static GameObject CopyObject(GameObject obj)
```

#### Parameters

`obj` GameObject<br />

#### Returns

GameObject<br />

### **Get(String)**

```csharp
public static GameObject Get(string name)
```

#### Parameters

`name` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

#### Returns

GameObject<br />

### **MakePrefab(GameObject)**

```csharp
public static void MakePrefab(GameObject obj)
```

#### Parameters

`obj` GameObject<br />

### **disableWarning(MelonPreferences_Entry)**

```csharp
public static void disableWarning(MelonPreferences_Entry entry)
```

#### Parameters

`entry` MelonPreferences_Entry<br />

### **disableWarning(MelonPreferences_Entry, Action)**

```csharp
public static void disableWarning(MelonPreferences_Entry entry, Action action)
```

#### Parameters

`entry` MelonPreferences_Entry<br />

`action` [Action](https://docs.microsoft.com/en-us/dotnet/api/system.action)<br />

### **RemoveComponent&lt;T&gt;(GameObject)**

```csharp
public static bool RemoveComponent<T>(GameObject obj)
```

#### Type Parameters

`T`<br />

#### Parameters

`obj` GameObject<br />

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### **RemoveComponent&lt;T&gt;(Transform)**

```csharp
public static bool RemoveComponent<T>(Transform obj)
```

#### Type Parameters

`T`<br />

#### Parameters

`obj` Transform<br />

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### **il2cppTypeof(Type)**

```csharp
public static Type il2cppTypeof(Type type)
```

#### Parameters

`type` [Type](https://docs.microsoft.com/en-us/dotnet/api/system.type)<br />

#### Returns

Type<br />

### **getObjRec&lt;T&gt;(GameObject, String)**

```csharp
public static T getObjRec<T>(GameObject obj, string name)
```

#### Type Parameters

`T`<br />

#### Parameters

`obj` GameObject<br />

`name` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

#### Returns

T<br />

### **GetChildren(Transform)**

```csharp
public static List<Transform> GetChildren(Transform obj)
```

#### Parameters

`obj` Transform<br />

#### Returns

[List&lt;Transform&gt;](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br />

### **DestroyAllChildren(Transform)**

```csharp
public static void DestroyAllChildren(Transform obj)
```

#### Parameters

`obj` Transform<br />

### **getAllChildren(GameObject)**

```csharp
public static List<GameObject> getAllChildren(GameObject obj)
```

#### Parameters

`obj` GameObject<br />

#### Returns

[List&lt;GameObject&gt;](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br />

### **getAllChildrenOfType&lt;T&gt;(GameObject)**

```csharp
public static T[] getAllChildrenOfType<T>(GameObject obj)
```

#### Type Parameters

`T`<br />

#### Parameters

`obj` GameObject<br />

#### Returns

T[]<br />

### **getAllChildrenOfType&lt;T&gt;(Transform)**

```csharp
public static T[] getAllChildrenOfType<T>(Transform obj)
```

#### Type Parameters

`T`<br />

#### Parameters

`obj` Transform<br />

#### Returns

T[]<br />

### **getObjRec&lt;T&gt;(Transform, String)**

```csharp
public static T getObjRec<T>(Transform transform, string name)
```

#### Type Parameters

`T`<br />

#### Parameters

`transform` Transform<br />

`name` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

#### Returns

T<br />

### **getAllChildren(Transform)**

```csharp
public static List<GameObject> getAllChildren(Transform container)
```

#### Parameters

`container` Transform<br />

#### Returns

[List&lt;GameObject&gt;](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br />

### **getVaccableListByPartialName(String, Boolean)**

```csharp
public static List<string> getVaccableListByPartialName(string input, bool useContain)
```

#### Parameters

`input` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

`useContain` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

#### Returns

[List&lt;String&gt;](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br />

### **getIdentListByPartialName(String, Boolean, Boolean, Boolean, Boolean)**

```csharp
public static List<string> getIdentListByPartialName(string input, bool includeNormal, bool includeGadget, bool useContain, bool includeStars)
```

#### Parameters

`input` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

`includeNormal` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

`includeGadget` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

`useContain` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

`includeStars` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

#### Returns

[List&lt;String&gt;](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br />

### **getKeyListByPartialName(String, Boolean)**

```csharp
public static List<string> getKeyListByPartialName(string input, bool useContain)
```

#### Parameters

`input` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

`useContain` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

#### Returns

[List&lt;String&gt;](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br />

### **IsBetween(String[], UInt32, Int32)**

```csharp
public static bool IsBetween(String[] list, uint min, int max)
```

#### Parameters

`list` [String[]](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

`min` [UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />

`max` [Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### **isGadget(IdentifiableType)**

```csharp
public static bool isGadget(IdentifiableType type)
```

#### Parameters

`type` IdentifiableType<br />

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### **getName(IdentifiableType)**

```csharp
public static string getName(IdentifiableType type)
```

#### Parameters

`type` IdentifiableType<br />

#### Returns

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **changeValue(float4, Int32, Single)**

```csharp
public static float4 changeValue(float4 float4, int index, float value)
```

#### Parameters

`float4` float4<br />

`index` [Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />

`value` [Single](https://docs.microsoft.com/en-us/dotnet/api/system.single)<br />

#### Returns

float4<br />

### **TryHideMenus()**

```csharp
public static void TryHideMenus()
```

### **TryPauseAndHide()**

```csharp
public static void TryPauseAndHide()
```

### **TryPauseGame(Boolean)**

```csharp
public static void TryPauseGame(bool usePauseMenu)
```

#### Parameters

`usePauseMenu` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### **TryUnPauseGame(Boolean)**

```csharp
public static void TryUnPauseGame(bool usePauseMenu)
```

#### Parameters

`usePauseMenu` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### **TryUnHideMenus()**

```csharp
public static void TryUnHideMenus()
```

### **TryDisableSR2Input()**

```csharp
public static void TryDisableSR2Input()
```

### **TryEnableSR2Input()**

```csharp
public static void TryEnableSR2Input()
```
