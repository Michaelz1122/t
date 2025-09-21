'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import { Button } from '@/components/ui/button'
import { 
  PenTool, 
  FileText, 
  MessageSquare, 
  Hash, 
  Target, 
  Users, 
  TrendingUp, 
  Lightbulb,
  Copy,
  Download,
  RefreshCw,
  CheckCircle,
  Zap,
  Star,
  ArrowRight
} from 'lucide-react'

export default function CopywritingToolsArabic() {
  const [activeTab, setActiveTab] = useState('ad-copy')
  const [formData, setFormData] = useState({
    product: '',
    audience: '',
    tone: 'professional',
    length: 'medium',
    keyPoints: '',
    cta: ''
  })
  const [generatedCopy, setGeneratedCopy] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const copywritingTools = [
    {
      id: 'ad-copy',
      title: 'مولد نصوص الإعلانات',
      description: 'إنشاء نصوص إعلانية جذابة لوسائل التواصل الاجتماعي وحملات البحث',
      icon: PenTool,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'headlines',
      title: 'مولد العناوين',
      description: 'إنشاء عناوين تجذب الانتباه لمحتواك',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'social-posts',
      title: 'مولد منشورات التواصل',
      description: 'إنشاء منشورات جذابة لمنصات التواصل الاجتماعي',
      icon: MessageSquare,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'hashtags',
      title: 'مولد الهاشتاجات',
      description: 'إنشاء هاشتاجات فعالة لزيادة الوصول والمشاركة',
      icon: Hash,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'email-subjects',
      title: 'مولد مواضيع البريد',
      description: 'إنشاء مواضيع بريد إلكتروني تجذب الانفتاح والنقر',
      icon: Target,
      color: 'from-yellow-500 to-amber-500'
    },
    {
      id: 'product-descriptions',
      title: 'مولد أوصاف المنتجات',
      description: 'إنشاء أوصاف منتجات مقنعة تزيد من المبيعات',
      icon: Users,
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const toneOptions = [
    { value: 'professional', label: 'احترافي' },
    { value: 'casual', label: 'ودود' },
    { value: 'urgent', label: 'عاجل' },
    { value: 'emotional', label: 'عاطفي' },
    { value: 'humorous', label: 'مرح' }
  ]

  const lengthOptions = [
    { value: 'short', label: 'قصير' },
    { value: 'medium', label: 'متوسط' },
    { value: 'long', label: 'طويل' }
  ]

  const generateAdCopy = () => {
    const toneText = {
      professional: 'احترافي',
      casual: 'ودود',
      urgent: 'عاجل',
      emotional: 'عاطفي',
      humorous: 'مرح'
    }[formData.tone]

    return `🎯 **نص إعلاني احترافي لـ ${formData.product}**

**الجمهور المستهدف:** ${formData.audience}
**نبرة الصوت:** ${toneText}

---

### 🔥 **النص الرئيسي:**
اكتشف ${formData.product} - الحل الأمثل لجميع احتياجاتك! منتجنا المبتكر مصمم خصيصاً لـ ${formData.audience}، يوفر لك تجربة استثنائية لا تضاهى.

${formData.keyPoints ? `### ✨ **المميزات الرئيسية:**
${formData.keyPoints.split('\n').map(point => `• ${point.trim()}`).join('\n')}` : ''}

### 💎 **لماذا تختارنا؟**
• جودة عالية مضمونة
• أسعار تنافسية تبدأ من 500 ج.م
• خدمة عملاء على مدار الساعة
• توصيل سريع لجميع المحافظات

### 🚀 **عرض خاص:**
احصل على خصم 20% عند الشراء الآن! الفرصة محدودة.

${formData.cta ? `### 👆 **دعوة للعمل:**
${formData.cta}` : '### 👆 **دعوة للعمل:**\nاطلب الآن واستمتع بأفضل تجربة!'}

---
📞 **للاستفسار:** 0123456789
🌐 **الموقع:** www.example.com
#تخفيضات #عروض_خاصة #جودة_عالية`
  }

  const generateHeadlines = () => {
    return `📰 **عناوين جذابة لـ ${formData.product}**

### 🔥 **العناوين الرئيسية:**
1. ${formData.product}: الحل الذي كنت تنتظره!
2. اكتشف سر التميز مع ${formData.product}
3. ${formData.product} - ثورة في عالم ${formData.audience}
4. لماذا يختار الجميع ${formData.product}؟
5. ${formData.product}: الاستثمار الذكي لمستقبلك

### 💡 **عناوين ثانوية:**
• لا تفوت فرصة الحصول على ${formData.product}
• ${formData.product} - الجودة التي تستحقها
• تجربة لا تُنسى مع ${formData.product}
• ${formData.product}: ابتسامة رضا مضمونة
• اكتشف الفرق مع ${formData.product}

---
#عناوين_جذابة #تسويق #إعلانات`
  }

  const generateSocialPosts = () => {
    const toneText = {
      professional: 'احترافي',
      casual: 'ودود',
      urgent: 'عاجل',
      emotional: 'عاطفي',
      humorous: 'مرح'
    }[formData.tone]

    return `📱 **منشورات تواصل اجتماعي لـ ${formData.product}**

### 📸 **منشور إنستجرام:**
[${formData.product}]

اكتشف عالم الجديد مع ${formData.product}! 🌟 منتج مصمم خصيصاً لـ ${formData.audience} يوفر لك تجربة فريدة من نوعها.

${formData.keyPoints ? `✨ **المميزات:**
${formData.keyPoints.split('\n').map(point => `• ${point.trim()}`).join('\n')}` : ''}

${formData.cta ? `👆 ${formData.cta}` : '👆 راسلنا للمزيد من التفاصيل!'}

#منتج_جديد #عروض #تخفيضات

---

### 💬 **منشور فيسبوك:**
🔥 **عرض خاص على ${formData.product}!** 🔥

الجمهور: ${formData.audience}
النبرة: ${toneText}

${formData.product} هو الحل الأمثل الذي تبحث عنه. منتجنا يتميز بالجودة العالية والسعر التنافسي بدءاً من 500 ج.م.

${formData.cta ? `➡️ ${formData.cta}` : '➡️ اطلب الآن واحصل على خصم خاص!'}

#عروض_خاصة #جودة #أسعار_مناسبة

---

### 🐦 **منشور تويتر:**
🚀 ${formData.product} - الحل الأمثل لـ ${formData.audience}!

جودة عالية ✓ أسعار تبدأ من 500 ج.م ✓ خدمة ممتازة ✓

${formData.cta || 'اطلب الآن واستمتع بالتميز!'}

#تخفيضات #عروض #جودة_عالية`
  }

  const generateHashtags = () => {
    return `🏷️ **هاشتاجات فعالة لـ ${formData.product}**

### 🔥 **الهاشتاجات الرئيسية:**
#${formData.product.replace(/\s+/g, '_')}
#${formData.audience.replace(/\s+/g, '_')}
#تخفيضات
#عروض_خاصة
#جودة_عالية
#أسعار_مناسبة
#منتج_جديد
#توصيل_سريع
#خدمة_عملاء
#رضا_عملاء

### 💡 **هاشتاجات حسب الفئة:**
**تجارية:**
#تسويق_رقمي
#أعمال_ناشئة
#استثمار
#نمو_الأعمال

**اجتماعية:**
#مجتمع
#تواصل
#مشاركة
#تجارب
#توصيات

**عروضية:**
#عروض_حصرية
#تخفيضات_كبيرة
#صفقات_رائعة
#فرصة_ذهبية
#عرض_لمدة_محدودة

### 📊 **استراتيجية الهاشتاجات:**
• استخدم 5-10 هاشتاجات لكل منشور
• ركز على الهاشتاجات الأكثر صلة
• اخلط بين العامة والخاصة
• استخدم هاشتاجات عالية التفاعل
• حدّث الهاشتاجات حسب المناسبات

---
#هاشتاجات #تسويق #وسائل_تواصل_اجتماعي`
  }

  const generateEmailSubjects = () => {
    const toneText = {
      professional: 'احترافي',
      casual: 'ودود',
      urgent: 'عاجل',
      emotional: 'عاطفي',
      humorous: 'مرح'
    }[formData.tone]

    return `📧 **مواضيع بريد إلكتروني لـ ${formData.product}**

### 🔥 **مواضيع رئيسية (نقر عالي):**
1. 🔥 عرض خاص: ${formData.product} بخصم 20% - محدود!
2. 🎁 ${formData.product}: الهدية التي كنت تنتظرها
3. ⚡ عاجل: آخر فرصة للحصول على ${formData.product}
4. 💎 اكتشف لماذا الجميع يتحدث عن ${formData.product}
5. 🌟 ${formData.product} - تغيير حقيقي لحياتك

### 💡 **مواضيع ثانوية:**
• لا تفوت ${formData.product} - الأسعار تبدأ من 500 ج.م
• ${formData.product}: الجودة التي تستحقها الآن بخصم
• رأي العملاء في ${formData.product} - 4.8/5 نجوم
• كيف غير ${formData.product} حياة ${formData.audience}؟
• ${formData.product}: الحل الأمثل لـ ${formData.audience}

### 📊 **مواضيع حسب النبرة (${toneText}):**
${formData.tone === 'professional' ? `• تحليل احترافي: ${formData.product} في السوق
• تقرير مفصل عن مميزات ${formData.product}
• ${formData.product}: الاستثمار الذكي لعملك` : 
  formData.tone === 'casual' ? `• صديقنا ${formData.product} وصل! 🎉
• جرب ${formData.product} وشاركنا رأيك
• ${formData.product}: منتج رائع بسعر أروع` :
  formData.tone === 'urgent' ? `⏰ آخر 24 ساعة لـ ${formData.product}!
• عاجل: مخزون ${formData.product} ينفذ بسرعة
• لا تنتظر! ${formData.product} بخصم محدود` :
  formData.tone === 'emotional' ? `• ❤️ ${formData.product}: أكثر من مجرد منتج
• كيف أثر ${formData.product} في حياة عملائنا
• ${formData.product}: قصة نجاح تستحق المشاهدة` :
  `• 😄 ${formData.product}: لأنك تستحق الابتسامة
• ${formData.product}: المرح والجودة في منتج واحد
• اضحك مع ${formData.product} واستمتع بالجودة`
}

---
#بريد_إلكتروني #تسويق #مواضيع_جذابة`
  }

  const generateProductDescriptions = () => {
    return `🛍️ **أوصاف منتجات مقنعة لـ ${formData.product}**

### 🔥 **الوصف الرئيسي:**
**${formData.product} - الحل الأمثل لـ ${formData.audience}**

قدم لنفسك تجربة استثنائية مع ${formData.product}، المنتج الثوري الذي صمم خصيصاً لتلبية جميع احتياجات ${formData.audience}. نجمع بين الجودة الفائقة والسعر التنافسي لنقدم لك منتجاً يستحق الاستثمار.

${formData.keyPoints ? `### ✨ **المميزات الرئيسية:**
${formData.keyPoints.split('\n').map(point => `• ${point.trim()}`).join('\n')}` : ''}

### 💎 **لماذا تختار ${formData.product}؟**
• **جودة مضمونة:** مواد خام عالية الجودة وأحدث تقنيات التصنيع
• **سعر تنافسي:** يبدأ من 500 ج.م فقط - أفضل سعر في السوق
• **خدمة ممتازة:** دعم فني على مدار الساعة وضمان لمدة سنة
• **توصيل سريع:** استلام خلال 24-48 ساعة في جميع المحافظات

### 🎯 **الجمهور المستهدف:**
مثالي لـ ${formData.audience} الباحثين عن الحلول المبتكرة والموثوقة.

### 📦 **ما في الصندوق:**
• ${formData.product} (القطعة الرئيسية)
• دليل استخدام متعدد اللغات
• شهادة ضمان الجودة
• هدية مجانية خاصة

### 💰 **العرض الخاص:**
احصل على خصم 20% عند الشراء الآن + شحن مجاني للطلبات فوق 1000 ج.م!

${formData.cta ? `### 🚀 **دعوة للعمل:**
${formData.cta}` : '### 🚀 **دعوة للعمل:**\nاطلب الآن واستمتع بتجربة لا تُنسى!'}

---
#منتج #أوصاف #تسويق #مبيعات`
  }

  const generateCopy = async () => {
    setIsGenerating(true)
    
    // Simulate AI generation with timeout
    setTimeout(() => {
      let copy = ''
      
      switch (activeTab) {
        case 'ad-copy':
          copy = generateAdCopy()
          break
        case 'headlines':
          copy = generateHeadlines()
          break
        case 'social-posts':
          copy = generateSocialPosts()
          break
        case 'hashtags':
          copy = generateHashtags()
          break
        case 'email-subjects':
          copy = generateEmailSubjects()
          break
        case 'product-descriptions':
          copy = generateProductDescriptions()
          break
        default:
          copy = generateAdCopy()
      }
      
      setGeneratedCopy(copy)
      setIsGenerating(false)
    }, 2000)
  }

  const resetForm = () => {
    setFormData({
      product: '',
      audience: '',
      tone: 'professional',
      length: 'medium',
      keyPoints: '',
      cta: ''
    })
    setGeneratedCopy('')
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedCopy)
      alert('تم النسخ إلى الحافظة!')
    } catch (err) {
      console.error('فشل النسخ: ', err)
      alert('فشل النسخ، يرجى المحاولة مرة أخرى.')
    }
  }

  const downloadAsText = () => {
    const blob = new Blob([generatedCopy], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${activeTab}-نصوص-تسويقية.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Navigation currentPath="/copywriting-tools-ar" />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full mb-6">
              <PenTool className="w-4 h-4" />
              <span className="text-sm font-medium">أدوات كتابة احترافية</span>
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              أدوات كتابة النصوص التسويقية
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              قم بإنشاء نصوص تسويقية احترافية وجذابة لجميع قنواتك التسويقية بأدوات متطورة وسهلة الاستخدام
            </p>
          </motion.div>

          {/* Tools Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {copywritingTools.map((tool, index) => (
                <motion.button
                  key={tool.id}
                  onClick={() => setActiveTab(tool.id)}
                  className={`p-4 rounded-2xl border transition-all duration-300 text-center ${
                    activeTab === tool.id
                      ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/50 text-white'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-purple-500/30'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <tool.icon className={`w-8 h-8 mx-auto mb-2 ${
                    activeTab === tool.id ? 'text-purple-400' : 'text-gray-400'
                  }`} />
                  <h3 className="font-semibold text-sm mb-1">{tool.title}</h3>
                  <p className="text-xs opacity-70">{tool.description}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-purple-400" />
                  إنشاء نص تسويقي
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      المنتج/الخدمة *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-400"
                      value={formData.product}
                      onChange={(e) => handleInputChange('product', e.target.value)}
                      placeholder="مثال: هاتف ذكي، دورة تدريبية، خدمة استشارات"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      الجمهور المستهدف *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-400"
                      value={formData.audience}
                      onChange={(e) => handleInputChange('audience', e.target.value)}
                      placeholder="مثال: الشباب، رائدات الأعمال، الطلاب"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      نبرة الصوت
                    </label>
                    <select
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white"
                      value={formData.tone}
                      onChange={(e) => handleInputChange('tone', e.target.value)}
                    >
                      {toneOptions.map(option => (
                        <option key={option.value} value={option.value} className="bg-gray-900">
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      الطول
                    </label>
                    <select
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white"
                      value={formData.length}
                      onChange={(e) => handleInputChange('length', e.target.value)}
                    >
                      {lengthOptions.map(option => (
                        <option key={option.value} value={option.value} className="bg-gray-900">
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      النقاط الرئيسية
                    </label>
                    <textarea
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-400 h-32 resize-none"
                      value={formData.keyPoints}
                      onChange={(e) => handleInputChange('keyPoints', e.target.value)}
                      placeholder="اكتب النقاط الرئيسية (سطر جديد لكل نقطة)&#10;مثال:&#10;• جودة عالية&#10;• سعر تنافسي&#10;• خدمة ممتازة"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      دعوة للعمل (CTA)
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-400"
                      value={formData.cta}
                      onChange={(e) => handleInputChange('cta', e.target.value)}
                      placeholder="مثال: اطلب الآن، اشترِ هنا، تواصل معنا"
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button
                      onClick={generateCopy}
                      disabled={isGenerating || !formData.product}
                      className="flex-1"
                    >
                      {isGenerating ? (
                        <>
                          <RefreshCw className="w-5 h-5 animate-spin mr-2" />
                          جاري الإنشاء...
                        </>
                      ) : (
                        <>
                          <Zap className="w-5 h-5 mr-2" />
                          إنشاء النص
                        </>
                      )}
                    </Button>
                    <Button
                      onClick={resetForm}
                      variant="outline"
                    >
                      <RefreshCw className="w-5 h-5 mr-2" />
                      إعادة تعيين
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Output */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-purple-400" />
                  النص المُنشأ
                </h3>
                
                {generatedCopy ? (
                  <div className="space-y-6">
                    <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                      <div className="text-white whitespace-pre-wrap leading-relaxed">
                        {generatedCopy}
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button
                        onClick={copyToClipboard}
                        variant="outline"
                      >
                        <Copy className="w-5 h-5 mr-2" />
                        نسخ
                      </Button>
                      <Button
                        onClick={downloadAsText}
                        variant="outline"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        تحميل
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Star className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-400 mb-2">لم يتم إنشاء أي نص بعد</p>
                    <p className="text-sm text-gray-500">املأ النموذج وانقر على "إنشاء النص" للبدء</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}