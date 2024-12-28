# SR2EExpansionV1

Namespace: SR2E.Expansion

```csharp
public abstract class SR2EExpansionV1 : MelonLoader.MelonMod
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → MelonBase → MelonTypeBase&lt;MelonMod&gt; → MelonMod → [SR2EExpansionV1](/docs/dev/api/sr2e/expansion/sr2eexpansionv1)

## Fields

### **OnRegister**

```csharp
public MelonEvent OnRegister;
```

### **OnUnregister**

```csharp
public MelonEvent OnUnregister;
```

## Properties

### **sr2Font**

```csharp
public static TMP_FontAsset sr2Font { get; }
```

#### Property Value

TMP_FontAsset<br></br>

### **InfoAttribute**

#### Caution

Use MelonBase.Info instead.

---

```csharp
public MelonModInfoAttribute InfoAttribute { get; }
```

#### Property Value

MelonModInfoAttribute<br></br>

### **GameAttributes**

#### Caution

Use MelonBase.Games instead.

---

```csharp
public MelonModGameAttribute[] GameAttributes { get; }
```

#### Property Value

MelonModGameAttribute[]<br></br>

### **MelonTypeName**

```csharp
public string MelonTypeName { get; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

### **MelonAssembly**

```csharp
public MelonAssembly MelonAssembly { get; internal set; }
```

#### Property Value

MelonAssembly<br></br>

### **Priority**

```csharp
public int Priority { get; internal set; }
```

#### Property Value

[Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br></br>

### **ConsoleColor**

```csharp
public Color ConsoleColor { get; internal set; }
```

#### Property Value

Color<br></br>

### **AuthorConsoleColor**

```csharp
public Color AuthorConsoleColor { get; internal set; }
```

#### Property Value

Color<br></br>

### **Info**

```csharp
public MelonInfoAttribute Info { get; internal set; }
```

#### Property Value

MelonInfoAttribute<br></br>

### **AdditionalCredits**

```csharp
public MelonAdditionalCreditsAttribute AdditionalCredits { get; internal set; }
```

#### Property Value

MelonAdditionalCreditsAttribute<br></br>

### **SupportedProcesses**

```csharp
public MelonProcessAttribute[] SupportedProcesses { get; internal set; }
```

#### Property Value

MelonProcessAttribute[]<br></br>

### **Games**

```csharp
public MelonGameAttribute[] Games { get; internal set; }
```

#### Property Value

MelonGameAttribute[]<br></br>

### **SupportedGameVersions**

```csharp
public MelonGameVersionAttribute[] SupportedGameVersions { get; internal set; }
```

#### Property Value

MelonGameVersionAttribute[]<br></br>

### **OptionalDependencies**

```csharp
public MelonOptionalDependenciesAttribute OptionalDependencies { get; internal set; }
```

#### Property Value

MelonOptionalDependenciesAttribute<br></br>

### **SupportedPlatforms**

```csharp
public MelonPlatformAttribute SupportedPlatforms { get; internal set; }
```

#### Property Value

MelonPlatformAttribute<br></br>

### **SupportedDomain**

```csharp
public MelonPlatformDomainAttribute SupportedDomain { get; internal set; }
```

#### Property Value

MelonPlatformDomainAttribute<br></br>

### **SupportedMLVersion**

```csharp
public VerifyLoaderVersionAttribute SupportedMLVersion { get; internal set; }
```

#### Property Value

VerifyLoaderVersionAttribute<br></br>

### **SupportedMLBuild**

```csharp
public VerifyLoaderBuildAttribute SupportedMLBuild { get; internal set; }
```

#### Property Value

VerifyLoaderBuildAttribute<br></br>

### **HarmonyInstance**

```csharp
public Harmony HarmonyInstance { get; internal set; }
```

#### Property Value

Harmony<br></br>

### **LoggerInstance**

```csharp
public Instance LoggerInstance { get; internal set; }
```

#### Property Value

Instance<br></br>

### **ID**

```csharp
public string ID { get; internal set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

### **Registered**

```csharp
public bool Registered { get; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **harmonyInstance**

#### Caution

Please use HarmonyInstance instead.

---

```csharp
public HarmonyInstance harmonyInstance { get; }
```

#### Property Value

HarmonyInstance<br></br>

### **Harmony**

#### Caution

Please use HarmonyInstance instead.

---

```csharp
public HarmonyInstance Harmony { get; }
```

#### Property Value

HarmonyInstance<br></br>

### **Assembly**

#### Caution

Please use MelonAssembly.Assembly instead.

---

```csharp
public Assembly Assembly { get; }
```

#### Property Value

[Assembly](https://docs.microsoft.com/en-us/dotnet/api/system.reflection.assembly)<br></br>

### **HarmonyDontPatchAll**

#### Caution

Please use MelonAssembly.HarmonyDontPatchAll instead.

---

```csharp
public bool HarmonyDontPatchAll { get; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **Hash**

#### Caution

Please use MelonAssembly.Hash instead.

---

```csharp
public string Hash { get; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

### **Location**

#### Caution

Please use MelonAssembly.Location instead.

---

```csharp
public string Location { get; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

## Methods

### **OnNormalInitializeMelon()**

Replacement for OnInitializeMelon.

```csharp
public void OnNormalInitializeMelon()
```

### **OnInitializeMelon()**

This method is sealed! Use OnNormalInitializeMelon instead!

```csharp
public void OnInitializeMelon()
```

### **OnSR2FontLoad()**

Gets executed once SR2's own font has been loaded.
 The TMP_FontAsset is called sr2Font.

```csharp
public void OnSR2FontLoad()
```

### **OnSaveDirectorLoading(AutoSaveDirector)**

Gets executed once the AutoSaveDirector is loading.

```csharp
public void OnSaveDirectorLoading(AutoSaveDirector autoSaveDirector)
```

#### Parameters

`autoSaveDirector` AutoSaveDirector<br></br>

### **SaveDirectorLoaded(AutoSaveDirector)**

Gets executed once the AutoSaveDirector has finished loading.
 You should use this method to add your translations to SR2
 and to add your own buttons.

```csharp
public void SaveDirectorLoaded(AutoSaveDirector autoSaveDirector)
```

#### Parameters

`autoSaveDirector` AutoSaveDirector<br></br>

### **LoadCommands()**

Gets executed once all commands get registered.
 You should use this method to register your own commands,
 with the SR2ECommand.CommandType.DontLoad flag,
 by using SR2EConsole.RegisterCommand(new YourCommand()).

```csharp
public void LoadCommands()
```

### **OnSystemCoreLoad()**

Gets executed every time the scene "SystemCore" gets loaded.

```csharp
public void OnSystemCoreLoad()
```

### **OnSystemCoreUnload()**

Gets executed every time the scene "SystemCore" gets unloaded.

```csharp
public void OnSystemCoreUnload()
```

### **OnSystemCoreInitialize()**

Gets executed every time the scene "SystemCore" gets initialized.

```csharp
public void OnSystemCoreInitialize()
```

### **OnStandaloneEngagementPromptLoad()**

Gets executed every time the scene "StandaloneEngagementPrompt" gets loaded.

```csharp
public void OnStandaloneEngagementPromptLoad()
```

### **OnStandaloneEngagementPromptUnload()**

Gets executed every time the scene "StandaloneEngagementPrompt" gets unloaded.

```csharp
public void OnStandaloneEngagementPromptUnload()
```

### **OnStandaloneEngagementPromptInitialize()**

Gets executed every time the scene "StandaloneEngagementPrompt" gets initialized.

```csharp
public void OnStandaloneEngagementPromptInitialize()
```

### **OnGameCoreLoad()**

Gets executed every time the scene "GameCore" gets loaded.

```csharp
public void OnGameCoreLoad()
```

### **OnGameCoreUnload()**

Gets executed every time the scene "GameCore" gets unloaded.

```csharp
public void OnGameCoreUnload()
```

### **OnGameCoreInitialize()**

Gets executed every time the scene "GameCore" gets initialized.

```csharp
public void OnGameCoreInitialize()
```

### **OnPlayerCoreLoad()**

Gets executed every time the scene "PlayerCore" gets loaded.

```csharp
public void OnPlayerCoreLoad()
```

### **OnPlayerCoreUnload()**

Gets executed every time the scene "PlayerCore" gets unloaded.

```csharp
public void OnPlayerCoreUnload()
```

### **OnPlayerCoreInitialize()**

Gets executed every time the scene "PlayerCore" gets initialized.

```csharp
public void OnPlayerCoreInitialize()
```

### **OnUICoreLoad()**

Gets executed every time the scene "UICore" gets loaded.

```csharp
public void OnUICoreLoad()
```

### **OnUICoreUnload()**

Gets executed every time the scene "UICore" gets unloaded.

```csharp
public void OnUICoreUnload()
```

### **OnUICoreInitialize()**

Gets executed every time the scene "UICore" gets initialized.

```csharp
public void OnUICoreInitialize()
```

### **OnMainMenuUILoad()**

Gets executed every time the scene "MainMenuUI" gets initialized.

```csharp
public void OnMainMenuUILoad()
```

### **OnMainMenuUIUnload()**

Gets executed every time the scene "MainMenuUI" gets loaded.

```csharp
public void OnMainMenuUIUnload()
```

### **OnMainMenuUIInitialize()**

Gets executed every time the scene "MainMenuUI" gets unloaded.

```csharp
public void OnMainMenuUIInitialize()
```

### **OnLoadSceneLoad()**

Gets executed every time the scene "LoadScene" gets loaded.

```csharp
public void OnLoadSceneLoad()
```

### **OnLoadSceneUnload()**

Gets executed every time the scene "LoadScene" gets unloaded .

```csharp
public void OnLoadSceneUnload()
```

### **OnLoadSceneInitialize()**

Gets executed every time the scene "LoadScene" gets initialized.

```csharp
public void OnLoadSceneInitialize()
```
