# CustomPauseMenuButton

Namespace: SR2E.Buttons

```csharp
public class CustomPauseMenuButton
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [CustomPauseMenuButton](/docs/dev/api-3.0.0-alpha.1/sr2e/buttons/custompausemenubutton)<br />
Attributes [NullableContextAttribute](/docs/dev/api-3.0.0-alpha.1/system/runtime/compilerservices/nullablecontextattribute), [NullableAttribute](/docs/dev/api-3.0.0-alpha.1/system/runtime/compilerservices/nullableattribute)

## Fields

### **label**

```csharp
public LocalizedString label;
```

### **insertIndex**

```csharp
public int insertIndex;
```

### **action**

```csharp
public Action action;
```

### **enabled**

```csharp
public bool enabled;
```

## Constructors

### **CustomPauseMenuButton(LocalizedString, Int32, Action)**

```csharp
public CustomPauseMenuButton(LocalizedString label, int insertIndex, Action action)
```

#### Parameters

`label` LocalizedString<br />

`insertIndex` [Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />

`action` [Action](https://docs.microsoft.com/en-us/dotnet/api/system.action)<br />

## Methods

### **Remove()**

```csharp
public void Remove()
```

### **AddAgain()**

```csharp
public void AddAgain()
```
